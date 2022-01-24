import { Cooldown } from '../../../nodes';
import IsPlainObject from '../../../../../utils/object/IsPlainObject.js';

var CreateCooldownNode = function (data, child) {
    // cooldown: duration
    // cooldown: {duration}
    return new Cooldown({
        duration: (IsPlainObject(data)) ? data.duration : data,
        child: child
    })
}

export default CreateCooldownNode;