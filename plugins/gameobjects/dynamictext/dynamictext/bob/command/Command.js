import Base from '../Base.js';
import { CmdTypeName } from '../Types.js';

class Command extends Base {
    constructor(parent, name, callback, param, scope) {
        super(parent, CmdTypeName);

        this
            .setName(name)
            .setParameter(param)
            .setCallback(callback, scope);
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setParameter(param) {
        this.param = param;
        return this;
    }

    setCallback(callback, scope) {
        this.callback = callback;
        this.scope = scope;
        return this;
    }

    exec() {
        if (this.scope) {
            this.callback.call(this.scope, this.param);
        } else {
            this.callback(this.param);
        }
    }

    draw() { }

    onFree() {
        super.onFree();
        this
            .setName()
            .setCallback()
            .setParameter()
    }
}

export default Command;