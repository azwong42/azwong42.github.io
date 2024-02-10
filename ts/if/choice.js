var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ChoiceMaker = (function () {
    function ChoiceMaker(choiceScript) {
        this.base = document.createElement('div');
        this.base.classList.add('choices-base');
        document.body.appendChild(this.base);
        this.states = new Map();
        this.scenes = new Map();
        this.completeSetup(choiceScript).then();
    }
    ChoiceMaker.prototype.completeSetup = function (choiceScript) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var response, choicesJson, initialStates, _i, initialStates_1, state, _b, _c, scene;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, fetch(choiceScript)];
                    case 1:
                        response = _d.sent();
                        return [4, response.json()];
                    case 2:
                        choicesJson = _d.sent();
                        initialStates = choicesJson.states;
                        initialStates.push({ state: 'alwaysTrue' });
                        initialStates.push({ state: 'alwaysFalse' });
                        for (_i = 0, initialStates_1 = initialStates; _i < initialStates_1.length; _i++) {
                            state = initialStates_1[_i];
                            this.states.set(state.state, (_a = state.value) !== null && _a !== void 0 ? _a : 0);
                        }
                        for (_b = 0, _c = choicesJson.scenes; _b < _c.length; _b++) {
                            scene = _c[_b];
                            this.scenes.set(scene.id, scene);
                        }
                        this.showScene(this.scenes.get(choicesJson.initialScene));
                        return [2];
                }
            });
        });
    };
    ChoiceMaker.prototype.showScene = function (scene) {
        var _a;
        this.base.innerHTML = '';
        var choicesInScene = new Map;
        for (var _i = 0, _b = (_a = scene.choices) !== null && _a !== void 0 ? _a : []; _i < _b.length; _i++) {
            var choice = _b[_i];
            choicesInScene.set(choice.id, choice);
        }
        this.showText(scene.text);
        if (scene.initialChoice !== undefined) {
            this.showChoice(choicesInScene.get(scene.initialChoice), choicesInScene);
        }
    };
    ChoiceMaker.prototype.showChoice = function (choice, choicesInScene) {
        var _this = this;
        var _a;
        var choiceOptions = document.createElement('ul');
        choiceOptions.id = "options";
        var _loop_1 = function (o) {
            var option = document.createElement('li');
            option.innerHTML = o.text;
            if (o.conditions !== undefined && !this_1.areConditionsMet(o.conditions)) {
                option.classList.add('disabled');
            }
            else {
                option.addEventListener('click', function () { return _this.selectChoiceOption(o, choice, choicesInScene); });
            }
            choiceOptions.appendChild(option);
        };
        var this_1 = this;
        for (var _i = 0, _b = (_a = choice.options) !== null && _a !== void 0 ? _a : []; _i < _b.length; _i++) {
            var o = _b[_i];
            _loop_1(o);
        }
        this.showText(choice.text);
        this.base.appendChild(choiceOptions);
    };
    ChoiceMaker.prototype.selectChoiceOption = function (option, choice, choicesInScene) {
        var _a, _b, _c;
        this.changeStates(option.stateChanges);
        document.getElementById('options').remove();
        this.showText((_a = option.replacementText) !== null && _a !== void 0 ? _a : option.text);
        var actualNext = undefined;
        var allNext = ((_b = option.next) !== null && _b !== void 0 ? _b : []).concat((_c = choice.next) !== null && _c !== void 0 ? _c : []);
        for (var _i = 0, allNext_1 = allNext; _i < allNext_1.length; _i++) {
            var n = allNext_1[_i];
            if (this.areConditionsMet(n.conditions)) {
                if (actualNext === undefined || (n.priority !== undefined && actualNext.priority !== undefined)) {
                    if (actualNext === undefined || n.priority > actualNext.priority) {
                        actualNext = n;
                    }
                }
                else {
                    throw new Error("Multiple valid options for \"Next\". You must specify priorities.");
                }
            }
        }
        if (actualNext === undefined) {
            throw new Error('No valid options for "Next".');
        }
        var id = actualNext.id;
        if (actualNext.type === 'choice') {
            if (!choicesInScene.has(id)) {
                throw new Error("Choice ".concat(id, " is referenced but never declared."));
            }
            this.showChoice(choicesInScene.get(id), choicesInScene);
        }
        else if (actualNext.type === 'scene') {
            if (!this.scenes.has(id)) {
                throw new Error("Scene ".concat(id, " is referenced but never declared."));
            }
            this.showScene(this.scenes.get(id));
        }
        else {
            throw new Error('Unsupported type for "Next".');
        }
    };
    ChoiceMaker.prototype.changeStates = function (changes) {
        for (var _i = 0, _a = changes !== null && changes !== void 0 ? changes : []; _i < _a.length; _i++) {
            var c = _a[_i];
            if (!this.states.has(c.state)) {
                throw new Error("State ".concat(c.state, " is modified but never declared."));
            }
            else {
                this.states.set(c.state, this.states.get(c.state) + c.value);
            }
        }
    };
    ChoiceMaker.prototype.areConditionsMet = function (conditions) {
        var _a;
        for (var _i = 0, _b = conditions !== null && conditions !== void 0 ? conditions : []; _i < _b.length; _i++) {
            var c = _b[_i];
            if (c.state === 'alwaysTrue') {
                return true;
            }
            else if (c.state === 'alwaysFalse') {
                return false;
            }
            else {
                if (!this.states.has(c.state)) {
                    throw new Error("State ".concat(c.state, " is referenced but never declared."));
                }
                var isLessThan = (_a = c.isLessThan) !== null && _a !== void 0 ? _a : false;
                if ((isLessThan && this.states.get(c.state) >= c.value) || (!isLessThan && this.states.get(c.state) < c.value)) {
                    return false;
                }
            }
        }
        return true;
    };
    ChoiceMaker.prototype.showText = function (text) {
        if (text !== undefined) {
            for (var _i = 0, _a = Array.from(this.states.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                text = text.replace(new RegExp('\\$\\{' + key + '\\}', 'g'), this.states.get(key).toString());
            }
            var textElem = document.createElement('p');
            textElem.innerHTML = text;
            this.base.appendChild(textElem);
        }
    };
    return ChoiceMaker;
}());
export { ChoiceMaker };
//# sourceMappingURL=choice.js.map