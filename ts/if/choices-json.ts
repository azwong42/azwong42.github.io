export type ChoicesJSON = {
    states: InitialState[],
    scenes: Scene[],
    initialScene: string
};

export type InitialState = {
    state: string,
    value?: number
}

export type Scene = {
    id: string,
    text?: string,
    choices?: Choice[],
    initialChoice?: string
};

export type Choice = {
    id: string,
    text: string,
    options?: ChoiceOption[]
    next?: Next[],
};

export type ChoiceOption = {
    text: string,
    conditions?: StateCondition[],
    stateChanges?: StateChange[],
    next?: Next[],
    replacementText?: string,
};

export type Next = {
    id: string
    type: NextType
    conditions?: StateCondition[],
    priority?: number
};

export type NextType = 'choice' | 'scene';

export type StateChange = {
    state: string,
    value: number
};

export type StateCondition = {
    state: string,
    value?: number,
    isLessThan?: boolean
};