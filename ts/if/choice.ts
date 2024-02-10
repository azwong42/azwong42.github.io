import {ChoicesJSON, Scene, Choice, ChoiceOption, Next, StateChange, StateCondition} from "./choices-json";

export class ChoiceMaker {
    private readonly base: HTMLElement;
    private readonly states: Map<string, number>;
    private readonly scenes: Map<string, Scene>;

    constructor(choiceScript: string) {
        this.base = document.createElement('div');
        this.base.classList.add('choices-base');
        document.body.appendChild(this.base);

        this.states = new Map<string, number>();
        this.scenes = new Map<string, Scene>();
        this.completeSetup(choiceScript).then();
    }

    async completeSetup(choiceScript: string): Promise<void> {
        const response = await fetch(choiceScript);
        const choicesJson: ChoicesJSON = await response.json();

        const initialStates = choicesJson.states;
        initialStates.push({ state: 'alwaysTrue'});
        initialStates.push({ state: 'alwaysFalse'});
        for (const state of initialStates) {
            this.states.set(state.state, state.value ?? 0);
        }
        for (const scene of choicesJson.scenes) {
            this.scenes.set(scene.id, scene);
        }
        this.showScene(this.scenes.get(choicesJson.initialScene));
    }

    showScene(scene: Scene) {
        this.base.innerHTML = '';
        const choicesInScene = new Map<string, Choice>;
        for (const choice of scene.choices ?? []) {
            choicesInScene.set(choice.id, choice);
        }
        this.showText(scene.text);
        if (scene.initialChoice !== undefined) {
            this.showChoice(choicesInScene.get(scene.initialChoice), choicesInScene);
        }
    }

    showChoice(choice: Choice, choicesInScene: Map<string, Choice>) {
        const choiceOptions = document.createElement('ul');
        choiceOptions.id = "options";
        for (const o of choice.options ?? []) {
            const option = document.createElement('li');
            option.innerHTML = o.text;
            if (o.conditions !== undefined && !this.areConditionsMet(o.conditions)) {
                    option.classList.add('disabled');
            } else {
                option.addEventListener('click', () => this.selectChoiceOption(o, choice, choicesInScene));
            }
            choiceOptions.appendChild(option);
        }

        this.showText(choice.text);
        this.base.appendChild(choiceOptions);
    }

    selectChoiceOption(option: ChoiceOption, choice: Choice, choicesInScene: Map<string, Choice>): void {
        this.changeStates(option.stateChanges);

        document.getElementById('options').remove();
        this.showText(option.replacementText ?? option.text);

        let actualNext: Next | undefined = undefined;
        const allNext = (option.next ?? []).concat(choice.next ?? []);
        for (const n of allNext) {
            if (this.areConditionsMet(n.conditions)) {
                if (actualNext === undefined || (n.priority !== undefined && actualNext.priority !== undefined)) {
                    if (actualNext === undefined || n.priority > actualNext.priority) {
                        actualNext = n;
                    }
                } else {
                    throw new Error(`Multiple valid options for "Next". You must specify priorities.`);
                }
            }
        }
        if (actualNext === undefined) {
            throw new Error('No valid options for "Next".');
        }
        const id = actualNext.id;
        if (actualNext.type === 'choice') {
            if (!choicesInScene.has(id)) {
                throw new Error(`Choice ${id} is referenced but never declared.`);
            }
            this.showChoice(choicesInScene.get(id), choicesInScene);
        } else if (actualNext.type === 'scene') {
            if (!this.scenes.has(id)) {
                throw new Error(`Scene ${id} is referenced but never declared.`);
            }
            this.showScene(this.scenes.get(id));
        } else {
            throw new Error('Unsupported type for "Next".');
        }
    }

    changeStates(changes: StateChange[]): void {
        for (const c of changes ?? []) {
            if (!this.states.has(c.state)) {
                throw new Error(`State ${c.state} is modified but never declared.`);
            } else {
                this.states.set(c.state, this.states.get(c.state) + c.value);
            }
        }
    }

    areConditionsMet(conditions: StateCondition[]): boolean {
        for (const c of conditions ?? []) {
            if (c.state === 'alwaysTrue') {
                return true;
            } else if (c.state === 'alwaysFalse') {
                return false;
            } else {
                if (!this.states.has(c.state)) {
                    throw new Error(`State ${c.state} is referenced but never declared.`);
                }
                const isLessThan: boolean = c.isLessThan ?? false;
                if ((isLessThan && this.states.get(c.state) >= c.value) || (!isLessThan && this.states.get(c.state) < c.value)) {
                    return false;
                }
            }
        }
        return true;
    }

    showText(text: string) {
        if (text !== undefined) {
            for (const key of Array.from(this.states.keys())) {
                text = text.replace(new RegExp('\\$\\{' + key + '\\}', 'g'), this.states.get(key).toString());
            }

            const textElem = document.createElement('p');
            textElem.innerHTML = text;
            this.base.appendChild(textElem);
        }

    }
}