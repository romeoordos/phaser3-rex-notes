(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rexdialog = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var Zone$1 = Phaser.GameObjects.Zone;
  var AddItem = Phaser.Utils.Array.Add;
  var RemoveItem$3 = Phaser.Utils.Array.Remove;

  var Base$1 = /*#__PURE__*/function (_Zone) {
    _inherits(Base, _Zone);

    var _super = _createSuper(Base);

    function Base(scene, x, y, width, height) {
      var _this;

      _classCallCheck(this, Base);

      if (x === undefined) {
        x = 0;
      }

      if (y === undefined) {
        y = 0;
      }

      if (width === undefined) {
        width = 1;
      }

      if (height === undefined) {
        height = 1;
      }

      _this = _super.call(this, scene, x, y, width, height);
      _this.children = [];
      return _this;
    }

    _createClass(Base, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene) {
          return;
        }

        if (fromScene) {
          // Stop scene
          var child;

          for (var i = this.children.length - 1; i >= 0; i--) {
            child = this.children[i];

            if (!child.parentContainer && // Not in container
            !child.displayList // Not in scene, neither in layer
            ) {
              // Destroy child which is not in scene, container, or layer manually
              child.destroy(fromScene);
            }
          }
        } // Destroy/remove children


        this.clear(!fromScene);

        _get(_getPrototypeOf(Base.prototype), "destroy", this).call(this, fromScene);
      }
    }, {
      key: "contains",
      value: function contains(gameObject) {
        return this.children.indexOf(gameObject) !== -1;
      }
    }, {
      key: "add",
      value: function add(gameObjects) {
        var parent = this;
        AddItem(this.children, gameObjects, 0, // Callback of item added
        function (gameObject) {
          gameObject.once('destroy', parent.onChildDestroy, parent);
        }, this);
        return this;
      }
    }, {
      key: "remove",
      value: function remove(gameObjects, destroyChild) {
        var parent = this;
        RemoveItem$3(this.children, gameObjects, // Callback of item removed
        function (gameObject) {
          gameObject.off('destroy', parent.onChildDestroy, parent);

          if (destroyChild) {
            gameObject.destroy();
          }
        });
        return this;
      }
    }, {
      key: "onChildDestroy",
      value: function onChildDestroy(child, fromScene) {
        // Only remove reference
        this.remove(child, false);
      }
    }, {
      key: "clear",
      value: function clear(destroyChild) {
        var parent = this;
        var gameObject;

        for (var i = 0, cnt = this.children.length; i < cnt; i++) {
          gameObject = this.children[i];
          gameObject.off('destroy', parent.onChildDestroy, parent);

          if (destroyChild) {
            gameObject.destroy();
          }
        }

        this.children.length = 0;
        return this;
      }
    }]);

    return Base;
  }(Zone$1);

  var Components = Phaser.GameObjects.Components;
  Phaser.Class.mixin(Base$1, [Components.Alpha, Components.Flip]);

  var GetParent = function GetParent(gameObject) {
    var parent;

    if (gameObject.hasOwnProperty('rexContainer')) {
      parent = gameObject.rexContainer.parent;
    }

    return parent;
  };

  var GetTopmostParent = function GetTopmostParent(gameObject) {
    var parent = GetParent(gameObject);

    while (parent) {
      gameObject = parent;
      parent = GetParent(parent);
    }

    return gameObject;
  };

  var DegToRad = Phaser.Math.DegToRad;
  var RadToDeg = Phaser.Math.RadToDeg;

  var GetLocalState = function GetLocalState(gameObject) {
    if (!gameObject.hasOwnProperty('rexContainer')) {
      var rexContainer = {
        parent: null,
        self: null,
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        visible: true,
        active: true
      };
      Object.defineProperty(rexContainer, 'angle', {
        get: function get() {
          return RadToDeg(this.rotation);
        },
        set: function set(value) {
          this.rotation = DegToRad(value);
        }
      });
      Object.defineProperty(rexContainer, 'displayWidth', {
        get: function get() {
          return gameObject.width * this.scaleX;
        },
        set: function set(width) {
          this.scaleX = width / gameObject.width;
        }
      });
      Object.defineProperty(rexContainer, 'displayHeight', {
        get: function get() {
          return gameObject.height * this.scaleY;
        },
        set: function set(height) {
          this.scaleY = height / gameObject.height;
        }
      });
      gameObject.rexContainer = rexContainer;
    }

    return gameObject.rexContainer;
  };

  var Parent = {
    setParent: function setParent(gameObject, parent) {
      if (parent === undefined) {
        parent = this;
      }

      var localState = GetLocalState(gameObject);

      if (parent) {
        // Add to parent
        localState.parent = parent;
        localState.self = gameObject;
      } else {
        // Remove from parent
        localState.parent = null;
        localState.self = null;
      }

      return this;
    },
    getParent: function getParent(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      return GetParent(gameObject);
    },
    getTopmostParent: function getTopmostParent(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      return GetTopmostParent(gameObject);
    }
  };

  var BaseAdd = Base$1.prototype.add;

  var Add$2 = function Add(gameObject) {
    this.setParent(gameObject);
    this.resetChildState(gameObject) // Reset local state of child
    .updateChildVisible(gameObject) // Apply parent's visible to child
    .updateChildActive(gameObject) // Apply parent's active to child
    .updateChildScrollFactor(gameObject) // Apply parent's scroll factor to child
    .updateChildMask(gameObject); // Apply parent's mask to child

    BaseAdd.call(this, gameObject);
    return this;
  };

  var AddLocal = function AddLocal(gameObject) {
    this.setParent(gameObject); // Set local state from child directly

    var state = GetLocalState(gameObject); // Position

    state.x = gameObject.x;
    state.y = gameObject.y;
    state.rotation = gameObject.rotation;
    state.scaleX = gameObject.scaleX;
    state.scaleY = gameObject.scaleY; // Alpha

    state.alpha = gameObject.alpha; // Visible

    state.visible = gameObject.visible; // Active

    state.active = gameObject.active;
    this.updateChildPosition(gameObject).updateChildAlpha(gameObject).updateChildVisible(gameObject) // Apply parent's visible to child
    .updateChildActive(gameObject) // Apply parent's active to child
    .updateChildScrollFactor(gameObject) // Apply parent's scroll factor to child
    .updateChildMask(gameObject); // Apply parent's mask to child

    BaseAdd.call(this, gameObject);
    return this;
  };

  var AddChild$1 = {
    add: function add(gameObject) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject);
      } else {
        Add$2.call(this, gameObject);
      }

      return this;
    },
    addMultiple: function addMultiple(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        Add$2.call(this, gameObjects[i]);
      }

      return this;
    },
    addLocal: function addLocal(gameObject) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject);
      } else {
        AddLocal.call(this, gameObject);
      }

      return this;
    },
    addLocalMultiple: function addLocalMultiple(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        AddLocal.call(this, gameObjects[i]);
      }

      return this;
    }
  };

  var BaseRemove = Base$1.prototype.remove;
  var BaseClear = Base$1.prototype.clear;
  var RemoveChild$1 = {
    remove: function remove(gameObject, destroyChild) {
      if (GetParent(gameObject) !== this) {
        return this;
      }

      this.setParent(gameObject, null);
      BaseRemove.call(this, gameObject, destroyChild);
      return this;
    },
    clear: function clear(destroyChild) {
      for (var i = 0, cnt = this.children.length; i < cnt; i++) {
        this.setParent(this.children[i], null);
      }

      BaseClear.call(this, destroyChild);
      return this;
    }
  };

  var ChildState = {
    getLocalState: function getLocalState(gameObject) {
      return GetLocalState(gameObject);
    },
    resetChildState: function resetChildState(gameObject) {
      this.resetChildPositionState(gameObject).resetChildVisibleState(gameObject).resetChildAlphaState(gameObject).resetChildActiveState(gameObject);
      return this;
    },
    resetChildrenState: function resetChildrenState(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.resetChildState(gameObjects[i]);
      }

      return this;
    },
    syncProperties: function syncProperties() {
      this.syncPosition().syncVisible().syncAlpha().syncActive().syncScrollFactor().syncMask();
      return this;
    }
  };

  var RotateAround$1 = Phaser.Math.RotateAround;
  var Transform = {
    worldToLocal: function worldToLocal(point) {
      // Transform
      point.x -= this.x;
      point.y -= this.y; // Rotate

      RotateAround$1(point, 0, 0, -this.rotation); // Scale

      point.x /= this.scaleX;
      point.y /= this.scaleY;
      return point;
    },
    localToWorld: function localToWorld(point) {
      // Scale
      point.x *= this.scaleX;
      point.y *= this.scaleY; // Rotate

      RotateAround$1(point, 0, 0, this.rotation); // Transform

      point.x += this.x;
      point.y += this.y;
      return point;
    }
  };

  var GetScale = function GetScale(a, b) {
    if (a === b) {
      return 1;
    } else {
      return a / b;
    }
  };

  var Position = {
    updateChildPosition: function updateChildPosition(child) {
      if (child.isRexContainerLite) {
        child.syncChildrenEnable = false;
      }

      var state = GetLocalState(child);
      var parent = state.parent;
      child.x = state.x;
      child.y = state.y;
      parent.localToWorld(child);
      child.scaleX = state.scaleX * parent.scaleX;
      child.scaleY = state.scaleY * parent.scaleY;
      child.rotation = state.rotation + parent.rotation;

      if (child.isRexContainerLite) {
        child.syncChildrenEnable = true;
        child.syncPosition();
      }

      return this;
    },
    syncPosition: function syncPosition() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildPosition, this);
      }

      return this;
    },
    resetChildPositionState: function resetChildPositionState(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      state.x = child.x;
      state.y = child.y;
      parent.worldToLocal(state);
      state.scaleX = GetScale(child.scaleX, parent.scaleX);
      state.scaleY = GetScale(child.scaleY, parent.scaleY);
      state.rotation = child.rotation - parent.rotation;
      return this;
    },
    setChildPosition: function setChildPosition(child, x, y) {
      child.x = x;
      child.y = y;
      this.resetChildPositionState(child);
      return this;
    },
    setChildLocalPosition: function setChildLocalPosition(child, x, y) {
      var state = GetLocalState(child);
      state.x = x;
      state.y = y;
      this.updateChildPosition(child);
      return this;
    },
    resetLocalPositionState: function resetLocalPositionState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildPositionState(this);
      }

      return this;
    }
  };

  var Rotation = {
    updateChildRotation: function updateChildRotation(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.rotation = parent.rotation + localState.rotation;
      return this;
    },
    syncRotation: function syncRotation() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildRotation, this);
      }

      return this;
    },
    resetChildRotationState: function resetChildRotationState(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      localState.rotation = child.rotation - parent.rotation;
      return this;
    },
    setChildRotation: function setChildRotation(child, rotation) {
      child.rotation = rotation;
      this.resetChildRotationState(child);
      return this;
    },
    setChildAngle: function setChildAngle(child, angle) {
      child.angle = angle;
      this.resetChildRotationState(child);
      return this;
    },
    setChildLocalRotation: function setChildLocalRotation(child, rotation) {
      var localState = GetLocalState(child);
      localState.rotation = rotation;
      this.updateChildRotation(child);
      return this;
    },
    resetLocalRotationState: function resetLocalRotationState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildRotationState(this);
      }

      return this;
    }
  };

  var Scale$1 = {
    updateChildScale: function updateChildScale(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.scaleX = parent.scaleX * localState.scaleX;
      child.scaleY = parent.scaleY * localState.scaleY;
      return this;
    },
    syncScale: function syncScale() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildScale, this);
      }

      return this;
    },
    resetChildScaleState: function resetChildScaleState(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      localState.scaleX = GetScale(child.scaleX, parent.scaleX);
      localState.scaleY = GetScale(child.scaleY, parent.scaleY);
      return this;
    },
    setChildScale: function setChildScale(child, scaleX, scaleY) {
      if (scaleY === undefined) {
        scaleY = scaleX;
      }

      child.scaleX = scaleX;
      child.scaleY = scaleY;
      this.resetChildScaleState(child);
      return this;
    },
    setChildLocalScale: function setChildLocalScale(child, scaleX, scaleY) {
      if (scaleY === undefined) {
        scaleY = scaleX;
      }

      var localState = GetLocalState(child);
      localState.scaleX = scaleX;
      localState.scaleY = scaleY;
      this.updateChildScale(child);
      return this;
    },
    setChildDisplaySize: function setChildDisplaySize(child, width, height) {
      child.setDisplaySize(width, height);
      this.resetChildScaleState(child);
      return this;
    },
    resetLocalScaleState: function resetLocalScaleState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildScaleState(this);
      }

      return this;
    }
  };

  /*

  Visible in localState:

    - visible: original visible of child
    - maskVisible: invisible by parent mask, see MaskChildren.js
        - undefined (not in masking) : Equal to mask visible
        - true (mask visible) : Inside, or across parent's visible area
        - false (maske invisible) : Out of parent's visible area

  Visible result of child = (parent visible) && (child visible) && (mask visible)
  */
  var Visible = {
    updateChildVisible: function updateChildVisible(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      var maskVisible = localState.hasOwnProperty('maskVisible') ? localState.maskVisible : true;
      child.visible = parent.visible && localState.visible && maskVisible;
      return this;
    },
    syncVisible: function syncVisible() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildVisible, this);
      }

      return this;
    },
    resetChildVisibleState: function resetChildVisibleState(child) {
      var localState = GetLocalState(child); // Delete maskVisible property

      if (localState.hasOwnProperty('maskVisible')) {
        delete localState.maskVisible;
      }

      localState.visible = child.visible;
      return this;
    },
    setChildVisible: function setChildVisible(child, visible) {
      // Visible of child will be affect by parent's visible, and mask visible
      this.setChildLocalVisible(child, visible);
      return this;
    },
    // Internal method
    setChildLocalVisible: function setChildLocalVisible(child, visible) {
      if (visible === undefined) {
        visible = true;
      }

      var localState = GetLocalState(child);
      localState.visible = visible;
      this.updateChildVisible(child);
      return this;
    },
    // Internal method
    setChildMaskVisible: function setChildMaskVisible(child, visible) {
      if (visible === undefined) {
        visible = true;
      }

      var localState = GetLocalState(child);
      localState.maskVisible = visible;
      this.updateChildVisible(child);
      return this;
    },
    resetLocalVisibleState: function resetLocalVisibleState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildVisibleState(this);
      }

      return this;
    }
  };

  var Alpha = {
    updateChildAlpha: function updateChildAlpha(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.alpha = parent.alpha * localState.alpha;
      return this;
    },
    syncAlpha: function syncAlpha() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildAlpha, this);
      }

      return this;
    },
    resetChildAlphaState: function resetChildAlphaState(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      localState.alpha = GetScale(child.alpha, parent.alpha);
      return this;
    },
    setChildAlpha: function setChildAlpha(child, alpha) {
      child.alpha = alpha;
      this.resetChildAlphaState(child);
      return this;
    },
    setChildLocalAlpha: function setChildLocalAlpha(child, alpha) {
      var localState = GetLocalState(child);
      localState.alpha = alpha;
      this.updateChildAlpha(child);
      return this;
    },
    resetLocalAlphaState: function resetLocalAlphaState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildAlphaState(this);
      }

      return this;
    }
  };

  var Active = {
    updateChildActive: function updateChildActive(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.active = parent.active && localState.active;
      return this;
    },
    syncActive: function syncActive() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildActive, this);
      }

      return this;
    },
    resetChildActiveState: function resetChildActiveState(child) {
      var localState = GetLocalState(child);
      localState.active = child.active;
      return this;
    },
    setChildActive: function setChildActive(child, active) {
      child.active = active;
      this.resetChildActiveState(child);
      return this;
    },
    setChildLocalActive: function setChildLocalActive(child, active) {
      if (active === undefined) {
        active = true;
      }

      var localState = GetLocalState(child);
      localState.active = active;
      this.updateChildActive(child);
      return this;
    },
    resetLocalActiveState: function resetLocalActiveState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildActiveState(this);
      }

      return this;
    }
  };

  var ScrollFactor = {
    updateChildScrollFactor: function updateChildScrollFactor(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.setScrollFactor(parent.scrollFactorX, parent.scrollFactorY);
      return this;
    },
    syncScrollFactor: function syncScrollFactor() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildScrollFactor, this);
      }

      return this;
    }
  };

  var Mask = {
    updateChildMask: function updateChildMask(child) {
      // Don't propagate null mask to clear children's mask
      if (this.mask == null) {
        return this;
      }

      var maskGameObject = this.mask.hasOwnProperty('geometryMask') ? this.mask.geometryMask : this.mask.bitmapMask;

      if (maskGameObject !== child) {
        child.mask = this.mask;
      }

      return this;
    },
    syncMask: function syncMask() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildMask, this);
      }

      return this;
    },
    setMask: function setMask(mask) {
      this.mask = mask;
      return this;
    },
    clearMask: function clearMask(destroyMask) {
      if (destroyMask === undefined) {
        destroyMask = false;
      }

      if (destroyMask && this.mask) {
        this.mask.destroy();
      }

      this.mask = null;
      return this;
    }
  };

  var SortGameObjectsByDepth = function SortGameObjectsByDepth(gameObjects, descending) {
    if (gameObjects.length === 0) {
      return gameObjects;
    }

    if (descending === undefined) {
      descending = false;
    }

    var scene = gameObjects[0].scene;
    var displayList = scene.sys.displayList;
    displayList.depthSort();

    if (descending) {
      gameObjects.sort(function (childA, childB) {
        return displayList.getIndex(childB) - displayList.getIndex(childA);
      });
    } else {
      gameObjects.sort(function (childA, childB) {
        return displayList.getIndex(childA) - displayList.getIndex(childB);
      });
    }

    return gameObjects;
  };

  var Depth = {
    setDepth: function setDepth(value, containerOnly) {
      this.depth = value;

      if (!containerOnly && this.children) {
        var children = this.getAllChildren();

        for (var i = 0, cnt = children.length; i < cnt; i++) {
          children[i].depth = value;
        }
      }

      return this;
    },
    swapDepth: function swapDepth(containerB) {
      var depthA = this.depth;
      var depthB = containerB.depth;
      this.setDepth(depthB);
      containerB.setDepth(depthA);
      return this;
    },
    incDepth: function incDepth(inc) {
      this.depth += inc;

      if (this.children) {
        var children = this.getAllChildren();

        for (var i = 0, cnt = children.length; i < cnt; i++) {
          children[i].depth += inc;
        }
      }

      return this;
    },
    moveDepthBelow: function moveDepthBelow(gameObject) {
      var displayList = gameObject.scene.children;
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children);

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];

        if (displayList.exists(child)) {
          displayList.moveBelow(gameObject, child);
          break;
        }
      }

      return this;
    },
    moveDepthAbove: function moveDepthAbove(gameObject) {
      var displayList = gameObject.scene.children;
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children, true);

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];

        if (displayList.exists(child)) {
          displayList.moveAbove(gameObject, child);
          break;
        }
      }

      return this;
    }
  };

  var ArrayUtils = Phaser.Utils.Array;
  var Children = {
    getChildren: function getChildren(out) {
      if (!out) {
        out = this.children; // Return internal children array
      } else {
        for (var i = 0, cnt = this.children.length; i < cnt; i++) {
          out.push(this.children[i]);
        } // Copy children

      }

      return out;
    },
    getAllChildren: function getAllChildren(out) {
      if (out === undefined) {
        out = [];
      }

      var children = this.children,
          child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];
        out.push(child);

        if (child.hasOwnProperty('isRexContainerLite')) {
          var _out;

          (_out = out).push.apply(_out, _toConsumableArray(child.getAllChildren()));
        }
      }

      return out;
    },
    getAllVisibleChildren: function getAllVisibleChildren(out) {
      if (out === undefined) {
        out = [];
      }

      var children = this.children,
          child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (!child.visible) {
          continue;
        }

        out.push(child);

        if (child.hasOwnProperty('isRexContainerLite')) {
          var _out2;

          (_out2 = out).push.apply(_out2, _toConsumableArray(child.getAllVisibleChildren()));
        }
      }

      return out;
    },
    contains: function contains(gameObject) {
      // Override Base.contains method
      var parent = GetParent(gameObject);

      if (!parent) {
        return false;
      } else if (parent === this) {
        return true;
      } else {
        return this.contains(parent);
      }
    },
    getByName: function getByName(name, recursive) {
      if (!recursive) {
        return ArrayUtils.GetFirst(this.children, 'name', name); // object, or null if not found
      } else {
        // recursive
        // Breadth-first search
        var queue = [this];
        var parent, child;

        while (queue.length) {
          parent = queue.shift();

          for (var i = 0, cnt = parent.children.length; i < cnt; i++) {
            child = parent.children[i];

            if (child.name === name) {
              return child;
            } else if (child.isRexContainerLite) {
              queue.push(child);
            }
          }
        }

        return null;
      }
    },
    getRandom: function getRandom(startIndex, length) {
      return ArrayUtils.GetRandom(this.children, startIndex, length);
    },
    getFirst: function getFirst(property, value, startIndex, endIndex) {
      return ArrayUtils.GetFirstElement(this.children, property, value, startIndex, endIndex);
    },
    getAll: function getAll(property, value, startIndex, endIndex) {
      return ArrayUtils.GetAll(this.children, property, value, startIndex, endIndex);
    },
    count: function count(property, value, startIndex, endIndex) {
      return ArrayUtils.CountAllMatching(this.children, property, value, startIndex, endIndex);
    },
    swap: function swap(child1, child2) {
      ArrayUtils.Swap(this.children, child1, child2);
      return this;
    },
    setAll: function setAll(property, value, startIndex, endIndex) {
      ArrayUtils.SetAll(this.children, property, value, startIndex, endIndex);
      return this;
    }
  };

  var IsArray = function IsArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var Tween = {
    tweenChild: function tweenChild(tweenConfig) {
      var targets = tweenConfig.targets;

      if (!IsArray(targets)) {
        targets = [targets];
      }

      var scene,
          localTargets = [];
      var child;

      for (var i = 0, cnt = targets.length; i < cnt; i++) {
        child = targets[i];

        if (!child.hasOwnProperty('rexContainer')) {
          continue;
        }

        scene = child.scene;
        localTargets.push(child.rexContainer);
      }

      if (!scene) {
        return;
      }

      tweenConfig.targets = localTargets;
      var tween = scene.tweens.add(tweenConfig);

      var tweenUpdateListener = function tweenUpdateListener(tween, key, target) {
        if (!target.parent) {
          // target object was removed, so remove this tween too to avoid crashing
          scene.tweens.remove(tween);
          return;
        }

        var parent = target.parent;
        var child = target.self;

        switch (key) {
          case 'x':
          case 'y':
            parent.updateChildPosition(child);
            break;

          case 'angle':
          case 'rotation':
            parent.updateChildRotation(child);
            break;

          case 'scaleX':
          case 'scaleY':
          case 'displayWidth':
          case 'displayHeight':
            parent.updateChildScale(child);
            break;

          case 'alpha':
            parent.updateChildAlpha(child);
            break;
        }
      };

      tween.on('update', tweenUpdateListener);
      return tween;
    },
    tween: function tween(tweenConfig) {
      var scene = this.scene;

      if (!tweenConfig.targets) {
        tweenConfig.targets = this;
      }

      return scene.tweens.add(tweenConfig);
    }
  };

  var AddToLayer = function AddToLayer(layer) {
    var gameObjects = this.getAllChildren([this]);
    SortGameObjectsByDepth(gameObjects);
    layer.add(gameObjects);
    return this;
  };

  var AddToContainer = {
    addToLayer: AddToLayer,
    addToContainer: AddToLayer
  };

  var RotateAround = Phaser.Math.RotateAround;

  var ChangeOrigin$1 = function ChangeOrigin(gameObject, originX, originY) {
    if (originY === undefined) {
      originY = originX;
    }

    var deltaXY = {
      x: (originX - gameObject.originX) * gameObject.displayWidth,
      y: (originY - gameObject.originY) * gameObject.displayHeight
    };
    RotateAround(deltaXY, 0, 0, gameObject.rotation);
    gameObject.originX = originX;
    gameObject.originY = originY;
    gameObject.x = gameObject.x + deltaXY.x;
    gameObject.y = gameObject.y + deltaXY.y;
    return gameObject;
  };

  var ChangeOrigin = function ChangeOrigin(originX, originY) {
    this.syncChildrenEnable = false;
    ChangeOrigin$1(this, originX, originY);
    this.syncChildrenEnable = true;
    var children = this.getAllChildren();

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      this.resetChildPositionState(children[i]);
    }

    return this;
  };

  var methods$3 = {
    changeOrigin: ChangeOrigin
  };
  Object.assign(methods$3, Parent, AddChild$1, RemoveChild$1, ChildState, Transform, Position, Rotation, Scale$1, Visible, Alpha, Active, ScrollFactor, Mask, Depth, Children, Tween, AddToContainer);

  var ContainerLite = /*#__PURE__*/function (_Base) {
    _inherits(ContainerLite, _Base);

    var _super = _createSuper(ContainerLite);

    function ContainerLite(scene, x, y, width, height, children) {
      var _this;

      _classCallCheck(this, ContainerLite);

      _this = _super.call(this, scene, x, y, width, height);
      _this.type = 'rexContainerLite';
      _this.isRexContainerLite = true;
      _this.syncChildrenEnable = true;
      _this._active = true;
      _this._mask = null;
      _this._scrollFactorX = 1;
      _this._scrollFactorY = 1;

      if (children) {
        _this.add(children);
      }

      return _this;
    }

    _createClass(ContainerLite, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene) {
          return;
        }

        this.syncChildrenEnable = false; // Don't sync properties changing anymore

        _get(_getPrototypeOf(ContainerLite.prototype), "destroy", this).call(this, fromScene);
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        this.setSize(width, height);
        return this;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(value) {
        if (this._x === value) {
          return;
        }

        this._x = value;
        this.syncPosition();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(value) {
        if (this._y === value) {
          return;
        }

        this._y = value;
        this.syncPosition();
      } // Override

    }, {
      key: "rotation",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "rotation", this);
      },
      set: function set(value) {
        if (this.rotation === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "rotation", value, this, true);

        this.syncPosition();
      } // Override

    }, {
      key: "scaleX",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "scaleX", this);
      },
      set: function set(value) {
        if (this.scaleX === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "scaleX", value, this, true);

        this.syncPosition();
      } // Override

    }, {
      key: "scaleY",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "scaleY", this);
      },
      set: function set(value) {
        if (this.scaleY === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "scaleY", value, this, true);

        this.syncPosition();
      } // Override

    }, {
      key: "visible",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "visible", this);
      },
      set: function set(value) {
        if (_get(_getPrototypeOf(ContainerLite.prototype), "visible", this) === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "visible", value, this, true);

        this.syncVisible();
      } // Override

    }, {
      key: "alpha",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "alpha", this);
      },
      set: function set(value) {
        if (_get(_getPrototypeOf(ContainerLite.prototype), "alpha", this) === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "alpha", value, this, true);

        this.syncAlpha();
      } // Override

    }, {
      key: "active",
      get: function get() {
        return this._active;
      },
      set: function set(value) {
        if (this._active === value) {
          return;
        }

        this._active = value;
        this.syncActive();
      } // Override

    }, {
      key: "mask",
      get: function get() {
        return this._mask;
      },
      set: function set(mask) {
        if (this._mask === mask) {
          return;
        }

        this._mask = mask;
        this.syncMask();
      } // Override

    }, {
      key: "scrollFactorX",
      get: function get() {
        return this._scrollFactorX;
      },
      set: function set(value) {
        if (this._scrollFactorX === value) {
          return;
        }

        this._scrollFactorX = value;
        this.syncScrollFactor();
      }
    }, {
      key: "scrollFactorY",
      get: function get() {
        return this._scrollFactorY;
      },
      set: function set(value) {
        if (this._scrollFactorY === value) {
          return;
        }

        this._scrollFactorY = value;
        this.syncScrollFactor();
      } // Compatiable with container plugin

    }, {
      key: "list",
      get: function get() {
        return this.children;
      }
    }], [{
      key: "GetParent",
      value: function GetParent$1(child) {
        return GetParent(child);
      }
    }]);

    return ContainerLite;
  }(Base$1);

  Object.assign(ContainerLite.prototype, methods$3);

  var GetSizerConfig = function GetSizerConfig(gameObject) {
    if (!gameObject.hasOwnProperty('rexSizer')) {
      gameObject.rexSizer = {};
    }

    return gameObject.rexSizer;
  };

  var GetChildPrevState = function GetChildPrevState(child) {
    var childConfig = GetSizerConfig(child);

    if (!childConfig.hasOwnProperty('prevState')) {
      childConfig.prevState = {};
    }

    return childConfig.prevState;
  };

  var GetDefaultBounds = function GetDefaultBounds(scene, out) {
    if (out === undefined) {
      if (GlobRectangle === undefined) {
        GlobRectangle = new Phaser.Geom.Rectangle();
      }

      out = GlobRectangle;
    }

    var gameConfig = scene.game.config;
    out.setTo(0, 0, gameConfig.width, gameConfig.height);
    return out;
  };

  var GlobRectangle;

  var PushIntoBounds = function PushIntoBounds(bounds) {
    if (bounds === undefined) {
      bounds = GetDefaultBounds(this.scene);
    }

    this.left = Math.max(this.left, bounds.left);
    this.right = Math.min(this.right, bounds.right);
    this.top = Math.max(this.top, bounds.top);
    this.bottom = Math.min(this.bottom, bounds.bottom);
    return this;
  };

  var ALIGN = Phaser.Display.Align;
  var ALIGNMODE = {
    center: ALIGN.CENTER,
    left: ALIGN.LEFT_CENTER,
    right: ALIGN.RIGHT_CENTER,
    top: ALIGN.TOP_CENTER,
    bottom: ALIGN.BOTTOM_CENTER,
    'left-top': ALIGN.TOP_LEFT,
    'left-center': ALIGN.LEFT_CENTER,
    'left-bottom': ALIGN.BOTTOM_LEFT,
    'center-top': ALIGN.TOP_CENTER,
    'center-center': ALIGN.CENTER,
    'center-bottom': ALIGN.BOTTOM_CENTER,
    'right-top': ALIGN.TOP_RIGHT,
    'right-center': ALIGN.RIGHT_CENTER,
    'right-bottom': ALIGN.BOTTOM_RIGHT
  };

  var NOOP = function NOOP() {//  NOOP
  };

  var globZone = new Phaser.GameObjects.Zone({
    sys: {
      queueDepthSort: NOOP,
      events: {
        once: NOOP
      }
    }
  }, 0, 0, 1, 1);
  globZone.setOrigin(0);

  var ALIGN_CONST = {
    /**
    * A constant representing a top-left alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_LEFT
    * @since 3.0.0
    * @type {integer}
    */
    TOP_LEFT: 0,

    /**
    * A constant representing a top-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    TOP_CENTER: 1,

    /**
    * A constant representing a top-right alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_RIGHT
    * @since 3.0.0
    * @type {integer}
    */
    TOP_RIGHT: 2,

    /**
    * A constant representing a left-top alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_TOP
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_TOP: 3,

    /**
    * A constant representing a left-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_CENTER: 4,

    /**
    * A constant representing a left-bottom alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_BOTTOM
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_BOTTOM: 5,

    /**
    * A constant representing a center alignment or position.
    * @constant
    * @name Phaser.Display.Align.CENTER
    * @since 3.0.0
    * @type {integer}
    */
    CENTER: 6,

    /**
    * A constant representing a right-top alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_TOP
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_TOP: 7,

    /**
    * A constant representing a right-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_CENTER: 8,

    /**
    * A constant representing a right-bottom alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_BOTTOM
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_BOTTOM: 9,

    /**
    * A constant representing a bottom-left alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_LEFT
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_LEFT: 10,

    /**
    * A constant representing a bottom-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_CENTER: 11,

    /**
    * A constant representing a bottom-right alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_RIGHT
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_RIGHT: 12
  };

  var GetDisplayWidth = function GetDisplayWidth(gameObject) {
    if (gameObject.displayWidth !== undefined) {
      return gameObject.displayWidth;
    } else {
      return gameObject.width;
    }
  };

  var GetDisplayHeight = function GetDisplayHeight(gameObject) {
    if (gameObject.displayHeight !== undefined) {
      return gameObject.displayHeight;
    } else {
      return gameObject.height;
    }
  };

  var GetBottom = function GetBottom(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y + height - height * gameObject.originY;
  };

  var GetCenterX = function GetCenterX(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x - width * gameObject.originX + width * 0.5;
  };

  var SetBottom = function SetBottom(gameObject, value) {
    var height = GetDisplayHeight(gameObject);
    gameObject.y = value - height + height * gameObject.originY;
    return gameObject;
  };

  var SetCenterX = function SetCenterX(gameObject, x) {
    var width = GetDisplayWidth(gameObject);
    var offsetX = width * gameObject.originX;
    gameObject.x = x + offsetX - width * 0.5;
    return gameObject;
  };

  var BottomCenter = function BottomCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetCenterX(gameObject, GetCenterX(alignIn) + offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var GetLeft = function GetLeft(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x - width * gameObject.originX;
  };

  var SetLeft = function SetLeft(gameObject, value) {
    var width = GetDisplayWidth(gameObject);
    gameObject.x = value + width * gameObject.originX;
    return gameObject;
  };

  var BottomLeft = function BottomLeft(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var GetRight = function GetRight(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x + width - width * gameObject.originX;
  };

  var SetRight = function SetRight(gameObject, value) {
    var width = GetDisplayWidth(gameObject);
    gameObject.x = value - width + width * gameObject.originX;
    return gameObject;
  };

  var BottomRight = function BottomRight(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var SetCenterY = function SetCenterY(gameObject, y) {
    var height = GetDisplayHeight(gameObject);
    var offsetY = height * gameObject.originY;
    gameObject.y = y + offsetY - height * 0.5;
    return gameObject;
  };

  var CenterOn = function CenterOn(gameObject, x, y) {
    SetCenterX(gameObject, x);
    return SetCenterY(gameObject, y);
  };

  var GetCenterY = function GetCenterY(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y - height * gameObject.originY + height * 0.5;
  };

  var Center = function Center(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    CenterOn(gameObject, GetCenterX(alignIn) + offsetX, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var LeftCenter = function LeftCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetCenterY(gameObject, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var RightCenter = function RightCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetCenterY(gameObject, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var GetTop = function GetTop(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y - height * gameObject.originY;
  };

  var SetTop = function SetTop(gameObject, value) {
    var height = GetDisplayHeight(gameObject);
    gameObject.y = value + height * gameObject.originY;
    return gameObject;
  };

  var TopCenter = function TopCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetCenterX(gameObject, GetCenterX(alignIn) + offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var TopLeft = function TopLeft(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var TopRight = function TopRight(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var AlignInMap = [];
  AlignInMap[ALIGN_CONST.BOTTOM_CENTER] = BottomCenter;
  AlignInMap[ALIGN_CONST.BOTTOM_LEFT] = BottomLeft;
  AlignInMap[ALIGN_CONST.BOTTOM_RIGHT] = BottomRight;
  AlignInMap[ALIGN_CONST.CENTER] = Center;
  AlignInMap[ALIGN_CONST.LEFT_CENTER] = LeftCenter;
  AlignInMap[ALIGN_CONST.RIGHT_CENTER] = RightCenter;
  AlignInMap[ALIGN_CONST.TOP_CENTER] = TopCenter;
  AlignInMap[ALIGN_CONST.TOP_LEFT] = TopLeft;
  AlignInMap[ALIGN_CONST.TOP_RIGHT] = TopRight;

  var QuickSet = function QuickSet(child, alignIn, position, offsetX, offsetY) {
    return AlignInMap[position](child, alignIn, offsetX, offsetY);
  };

  var AlignIn = function AlignIn(child, x, y, width, height, align) {
    globZone.setPosition(x, y).setSize(width, height);
    QuickSet(child, globZone, align);
  };

  var GetValue$g = Phaser.Utils.Objects.GetValue;
  var Group = Phaser.GameObjects.Group;

  var DrawBounds = function DrawBounds(graphics, config) {
    var scene = graphics.scene;
    var color;
    var createTextCallback, createTextCallbackScope, textAlign;

    if (typeof config === 'number') {
      color = config;
    } else {
      color = GetValue$g(config, 'color', 0xffffff);
      var nameTextConfig = GetValue$g(config, 'name', false);

      if (nameTextConfig) {
        createTextCallback = GetValue$g(nameTextConfig, 'createTextCallback', DefaultCreateTextCallback);
        createTextCallbackScope = GetValue$g(nameTextConfig, 'createTextCallbackScope', undefined);
        textAlign = GetValue$g(nameTextConfig, 'align', 'left-top');

        if (typeof textAlign === 'string') {
          textAlign = ALIGNMODE[textAlign];
        }
      }
    }

    if (createTextCallback && !graphics.children) {
      graphics.children = new Group(scene);
      graphics.once('destroy', function (graphics, fromScene) {
        graphics.children.destroy(!fromScene);
        graphics.children = undefined;
      });
      var graphicsClear = graphics.clear.bind(graphics);

      graphics.clear = function () {
        graphicsClear();
        graphics.children.clear(false, true);
      };
    }

    var children = this.getAllShownChildren([this]),
        child;
    var nameText;

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];

      if (!child.getBounds) {
        continue;
      }

      if (color) {
        graphics.lineStyle(1, color).strokeRectShape(child.getBounds(GlobRect));
      }

      if (child.name && createTextCallback) {
        if (createTextCallbackScope) {
          nameText = createTextCallback.call(createTextCallbackScope, scene);
        } else {
          nameText = createTextCallback(scene);
        }

        if (nameText) {
          nameText.setText(child.name);
          graphics.children.add(nameText);
          AlignIn(nameText, GlobRect.x, GlobRect.y, GlobRect.width, GlobRect.height, textAlign);
        }
      }
    }

    return this;
  };

  var DefaultCreateTextCallback = function DefaultCreateTextCallback(scene, child, childBoundsRect) {
    return scene.add.text(0, 0, '');
  };

  var GlobRect = new Phaser.Geom.Rectangle();

  var GetValue$f = Phaser.Utils.Objects.GetValue;

  var GetBoundsConfig = function GetBoundsConfig(config, out) {
    if (out === undefined) {
      out = {};
    }

    if (typeof config === 'number') {
      out.left = config;
      out.right = config;
      out.top = config;
      out.bottom = config;
    } else {
      out.left = GetValue$f(config, 'left', 0);
      out.right = GetValue$f(config, 'right', 0);
      out.top = GetValue$f(config, 'top', 0);
      out.bottom = GetValue$f(config, 'bottom', 0);
    }

    return out;
  };

  var ContainerAdd$1 = ContainerLite.prototype.add;

  var AddChild = function AddChild(gameObject) {
    ContainerAdd$1.call(this, gameObject);

    if (this.sizerEventsEnable) {
      gameObject.emit('sizer.add', gameObject, this);
      this.emit('add', gameObject, this);
    }

    return this;
  };

  var ContainerAdd = ContainerLite.prototype.add;
  var AddChildMethods$2 = {
    pin: function pin(gameObject) {
      ContainerAdd.call(this, gameObject);
      return this;
    },
    addBackground: function addBackground(gameObject, paddingConfig, childKey) {
      if (this.backgroundChildren === undefined) {
        this.backgroundChildren = [];
      }

      if (typeof paddingConfig === 'string') {
        childKey = paddingConfig;
        paddingConfig = undefined;
      }

      if (paddingConfig === undefined) {
        paddingConfig = 0;
      }

      AddChild.call(this, gameObject);
      this.backgroundChildren.push(gameObject);
      var config = this.getSizerConfig(gameObject);
      config.padding = GetBoundsConfig(paddingConfig);

      if (childKey !== undefined) {
        this.addChildrenMap(childKey, gameObject);
      }

      return this;
    },
    isBackground: function isBackground(gameObject) {
      if (this.backgroundChildren === undefined) {
        return false;
      }

      return this.backgroundChildren.indexOf(gameObject) !== -1;
    }
  };

  var AddChildrenMap = function AddChildrenMap(key, gameObject) {
    if (this.childrenMap === undefined) {
      this.childrenMap = {};
    }

    this.childrenMap[key] = gameObject;
    return this;
  };

  var GetElement = function GetElement(mapNameList, recursive) {
    if (typeof mapNameList === 'string') {
      mapNameList = mapNameList.split('.');
    }

    if (mapNameList.length === 0) {
      return undefined;
    }

    var name = mapNameList.shift(),
        element = null;

    if (name.charAt(0) === '#') {
      // Get element by name
      name = name.substring(1);
      element = this.getByName(name, recursive);
    } else if (name.indexOf('[') === -1) {
      // Get element by key
      if (this.childrenMap) {
        element = this.childrenMap[name];
      }
    } else {
      // Get element by key[]
      var innerMatch = name.match(RE_OBJ);

      if (innerMatch != null) {
        if (this.childrenMap) {
          var elements = this.childrenMap[innerMatch[1]];

          if (elements) {
            element = elements[innerMatch[2]];
          }
        }
      }
    }

    if (mapNameList.length === 0) {
      return element;
    } else if (element && element.childrenMap) {
      return element.getElement(mapNameList);
    } else {
      return null;
    }
  };

  var RE_OBJ = /(\S+)\[(\d+)\]/i;

  var GetValue$e = Phaser.Utils.Objects.GetValue;

  var GetPadding = function GetPadding(padding, key) {
    if (key === undefined) {
      return padding;
    }

    return padding[key];
  };

  var SetPadding = function SetPadding(padding, key, value) {
    var keyType = _typeof(key);

    if (keyType === 'string') {
      padding[key] = value;
    } else if (keyType === 'number') {
      padding.left = key;
      padding.right = key;
      padding.top = key;
      padding.bottom = key;
    } else {
      padding.left = GetValue$e(key, 'left', 0);
      padding.right = GetValue$e(key, 'right', 0);
      padding.top = GetValue$e(key, 'top', 0);
      padding.bottom = GetValue$e(key, 'bottom', 0);
    }
  };

  var PaddingMethods = {
    getInnerPadding: function getInnerPadding(key) {
      return GetPadding(this.space, key);
    },
    setInnerPadding: function setInnerPadding(key, value) {
      SetPadding(this.space, key, value);
      return this;
    },
    getOutterPadding: function getOutterPadding(key) {
      return GetPadding(this.getSizerConfig(this).padding, key);
    },
    setOuterPadding: function setOuterPadding(key, value) {
      SetPadding(this.getSizerConfig(this).padding, key, value);
      return this;
    },
    getChildOutterPadding: function getChildOutterPadding(child, key) {
      if (typeof child === 'string') {
        child = this.getElement(child);
      }

      return GetPadding(this.getSizerConfig(child).padding, key);
    },
    setChildOuterPadding: function setChildOuterPadding(child, key, value) {
      if (typeof child === 'string') {
        child = this.getElement(child);
      }

      SetPadding(this.getSizerConfig(child).padding, key, value);
      return this;
    }
  };

  var ResolveWidth$1 = function ResolveWidth(width) {
    var minWidth = Math.max(this.childrenWidth, this.minWidth);

    if (width === undefined) {
      width = minWidth;
    }

    return width;
  };

  var ResolveChildrenWidth = function ResolveChildrenWidth(width) {
    // Resolve width of sizer children
    var child, childWidth;

    for (var i in this.sizerChildren) {
      child = this.sizerChildren[i];

      if (child && child.isRexSizer && !child.ignoreLayout) {
        childWidth = this.getExpandedChildWidth(child, width);
        childWidth = child.resolveWidth(childWidth);
        child.resolveChildrenWidth(childWidth);
      }
    }
  };

  var ResolveHeight$1 = function ResolveHeight(height) {
    var minHeight = Math.max(this.childrenHeight, this.minHeight);

    if (height === undefined) {
      height = minHeight;
    }

    return height;
  };

  var GetChildWidth = function GetChildWidth(child) {
    var childWidth;

    if (child.isRexSizer) {
      // Sizer game object
      childWidth = Math.max(child.minWidth, child.childrenWidth);
    } else {
      // Normal game object
      if (child.minWidth !== undefined) {
        // Force minWidth
        childWidth = child.minWidth;
      } else {
        childWidth = GetDisplayWidth(child);
      }
    }

    return childWidth;
  };

  var GetChildHeight = function GetChildHeight(child) {
    var childHeight;

    if (child.isRexSizer) {
      // Sizer game object
      childHeight = Math.max(child.minHeight, child.childrenHeight);
    } else {
      // Normal game object
      if (child.minHeight !== undefined) {
        // Force minHeight
        childHeight = child.minHeight;
      } else {
        childHeight = GetDisplayHeight(child);
      }
    }

    return childHeight;
  };

  // Override
  var GetExpandedChildWidth$1 = function GetExpandedChildWidth(child, parentWidth) {
    return parentWidth;
  };

  // Override
  var GetExpandedChildHeight$1 = function GetExpandedChildHeight(child, parentHeight) {
    return parentHeight;
  };

  // Override
  var GetChildrenWidth$1 = function GetChildrenWidth() {
    return 0;
  };

  // Override
  var GetChildrenHeight$1 = function GetChildrenHeight() {
    return 0;
  };

  var GetAllChildrenSizers = function GetAllChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }

    var startIdx = out.length;
    var children = this.getChildrenSizers(out);
    var endIdx = out.length;

    for (var i = startIdx; i < endIdx; i++) {
      children[i].getAllChildrenSizers(out);
    }

    return out;
  };

  // Default method
  var GetChildrenSizers$1 = function GetChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }

    return out;
  };

  var GetShownChildrenMethods = {
    getShownChildren: function getShownChildren(out) {
      if (out === undefined) {
        out = [];
      }

      var children = this.children,
          child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (child.rexSizer && child.rexSizer.hidden) {
          // Don't add hidden child
          continue;
        }

        out.push(child);
      }

      return out;
    },
    getAllShownChildren: function getAllShownChildren(out) {
      if (out === undefined) {
        out = [];
      }

      var children = this.children,
          child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (child.rexSizer && child.rexSizer.hidden) {
          // Don't add hidden child
          continue;
        }

        out.push(child);

        if (child.hasOwnProperty('isRexContainerLite')) {
          var _out;

          (_out = out).push.apply(_out, _toConsumableArray(child.getAllShownChildren()));
        }
      }

      return out;
    }
  };

  var PreLayout$1 = function PreLayout() {
    this._childrenWidth = undefined;
    this._childrenHeight = undefined;
    var children = this.getChildrenSizers(),
        child;

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];

      if (child.ignoreLayout) {
        continue;
      }

      child.preLayout();
    }
  };

  var Layout = function Layout() {
    this.runLayout();
    return this;
  };

  // Override
  var RunLayout = function RunLayout(parent, newWidth, newHeight) {
    // Skip hidden or !dirty sizer
    if (this.ignoreLayout) {
      return this;
    }

    var isTopmostParent = !parent; // Preprocessor, top parent only

    if (isTopmostParent) {
      this.preLayout();
    } // Calculate parent width


    newWidth = this.resolveWidth(newWidth); // Calculate all children width, run width wrap

    if (isTopmostParent) {
      this.resolveChildrenWidth(newWidth);
      this.runWidthWrap(newWidth);
    } // Calculate parent height


    newHeight = this.resolveHeight(newHeight); // Resize parent

    this.resize(newWidth, newHeight);

    if (this.sizerEventsEnable) {
      if (this.layoutedChildren === undefined) {
        this.layoutedChildren = [];
      }
    } // Layout children    


    this.layoutChildren(); // Layout background children

    this.layoutBackgrounds();

    if (this.sizerEventsEnable) {
      this.emit('postlayout', this.layoutedChildren, this);
      this.layoutedChildren.length = 0;
    }

    return this.postLayout();
  };

  // Override
  var LayoutChildren$1 = function LayoutChildren() {};

  var PostLayout = function PostLayout(parent, newWidth, newHeight) {
    if (this._anchor) {
      this._anchor.updatePosition();
    }

    return this;
  };

  // Default method
  var RunWidthWrap = function RunWidthWrap(width) {
    var child, childWidth;

    for (var i in this.sizerChildren) {
      child = this.sizerChildren[i];

      if (!child || child.isRexSizer && child.ignoreLayout) {
        continue;
      }

      childWidth = this.getExpandedChildWidth(child, width);

      if (childWidth === undefined) {
        childWidth = this.resolveWidth(childWidth);
      }

      if (child.runWidthWrap) {
        child.runWidthWrap(childWidth);
      }
    }

    return this;
  };

  var EventEmitterMethods = {
    setEventEmitter: function setEventEmitter(eventEmitter, EventEmitterClass) {
      if (EventEmitterClass === undefined) {
        EventEmitterClass = Phaser.Events.EventEmitter; // Use built-in EventEmitter class by default
      }

      this._privateEE = eventEmitter === true || eventEmitter === undefined;
      this._eventEmitter = this._privateEE ? new EventEmitterClass() : eventEmitter;
      return this;
    },
    destroyEventEmitter: function destroyEventEmitter() {
      if (this._eventEmitter && this._privateEE) {
        this._eventEmitter.shutdown();
      }

      return this;
    },
    getEventEmitter: function getEventEmitter() {
      return this._eventEmitter;
    },
    on: function on() {
      if (this._eventEmitter) {
        this._eventEmitter.on.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    once: function once() {
      if (this._eventEmitter) {
        this._eventEmitter.once.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    off: function off() {
      if (this._eventEmitter) {
        this._eventEmitter.off.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    emit: function emit(event) {
      if (this._eventEmitter && event) {
        this._eventEmitter.emit.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    addListener: function addListener() {
      if (this._eventEmitter) {
        this._eventEmitter.addListener.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    removeListener: function removeListener() {
      if (this._eventEmitter) {
        this._eventEmitter.removeListener.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    removeAllListeners: function removeAllListeners() {
      if (this._eventEmitter) {
        this._eventEmitter.removeAllListeners.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    listenerCount: function listenerCount() {
      if (this._eventEmitter) {
        return this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments);
      }

      return 0;
    },
    listeners: function listeners() {
      if (this._eventEmitter) {
        return this._eventEmitter.listeners.apply(this._eventEmitter, arguments);
      }

      return [];
    },
    eventNames: function eventNames() {
      if (this._eventEmitter) {
        return this._eventEmitter.eventNames.apply(this._eventEmitter, arguments);
      }

      return [];
    }
  };

  var SceneClass = Phaser.Scene;

  var IsSceneObject = function IsSceneObject(object) {
    return object instanceof SceneClass;
  };

  var GetSceneObject = function GetSceneObject(object) {
    if (object == null || _typeof(object) !== 'object') {
      return null;
    } else if (IsSceneObject(object)) {
      // object = scene
      return object;
    } else if (object.scene && IsSceneObject(object.scene)) {
      // object = game object
      return object.scene;
    } else if (object.parent && object.parent.scene && IsSceneObject(object.parent.scene)) {
      // parent = bob object
      return object.parent.scene;
    }
  };

  var GetValue$d = Phaser.Utils.Objects.GetValue;

  var ComponentBase = /*#__PURE__*/function () {
    function ComponentBase(parent, config) {
      _classCallCheck(this, ComponentBase);

      this.parent = parent; // gameObject or scene

      this.scene = GetSceneObject(parent);
      this.isShutdown = false; // Event emitter, default is private event emitter

      this.setEventEmitter(GetValue$d(config, 'eventEmitter', true)); // Register callback of parent destroy event, also see `shutdown` method

      if (this.parent && this.parent === this.scene) {
        // parent is a scene
        this.scene.events.once('shutdown', this.onSceneDestroy, this);
      } else if (this.parent && this.parent.once) {
        // bob object does not have event emitter
        this.parent.once('destroy', this.onParentDestroy, this);
      }
    }

    _createClass(ComponentBase, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        } // parent might not be shutdown yet


        if (this.parent && this.parent === this.scene) {
          // parent is a scene
          this.scene.events.off('shutdown', this.onSceneDestroy, this);
        } else if (this.parent && this.parent.once) {
          // bob object does not have event emitter
          this.parent.off('destroy', this.onParentDestroy, this);
        }

        this.destroyEventEmitter();
        this.parent = undefined;
        this.scene = undefined;
        this.isShutdown = true;
      }
    }, {
      key: "destroy",
      value: function destroy(fromScene) {
        this.shutdown(fromScene);
      }
    }, {
      key: "onSceneDestroy",
      value: function onSceneDestroy() {
        this.destroy(true);
      }
    }, {
      key: "onParentDestroy",
      value: function onParentDestroy(parent, fromScene) {
        this.destroy(fromScene);
      }
    }]);

    return ComponentBase;
  }();
  Object.assign(ComponentBase.prototype, EventEmitterMethods);

  var Rectangle = Phaser.Geom.Rectangle;
  Phaser.Scale.Center;

  var GetViewport = function GetViewport(scene, out) {
    if (out === undefined) {
      out = new Rectangle();
    } else if (out === true) {
      out = globRect$1;
    }

    var scaleManager = scene.scale;
    var baseSize = scaleManager.baseSize;
    var parentSize = scaleManager.parentSize;
    var canvasBounds = scaleManager.canvasBounds;
    var displayScale = scaleManager.displayScale;
    var x = canvasBounds.x >= 0 ? 0 : -(canvasBounds.x * displayScale.x);
    var y = canvasBounds.y >= 0 ? 0 : -(canvasBounds.y * displayScale.y);
    var width;

    if (parentSize.width >= canvasBounds.width) {
      width = baseSize.width;
    } else {
      width = baseSize.width - (canvasBounds.width - parentSize.width) * displayScale.x;
    }

    var height;

    if (parentSize.height >= canvasBounds.height) {
      height = baseSize.height;
    } else {
      height = baseSize.height - (canvasBounds.height - parentSize.height) * displayScale.y;
    }

    out.setTo(x, y, width, height);
    return out;
  };

  var globRect$1 = new Rectangle();

  var Anchor = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Anchor, _ComponentBase);

    var _super = _createSuper(Anchor);

    function Anchor(gameObject, config) {
      var _this;

      _classCallCheck(this, Anchor);

      _this = _super.call(this, gameObject, {
        eventEmitter: false
      }); // No event emitter
      // this.parent = gameObject;

      _this.viewport = undefined;

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(Anchor, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        if (o === undefined) {
          o = {};
        } // Position


        var alignX, configX;

        if (o.x !== undefined) {
          alignX = null;
          configX = o.x;
        } else if (o.left !== undefined) {
          alignX = 0;
          configX = o.left;
        } else if (o.right !== undefined) {
          alignX = 1;
          configX = o.right;
        } else if (o.centerX !== undefined) {
          alignX = 0.5;
          configX = o.centerX;
        }

        var alignY, configY;

        if (o.y !== undefined) {
          alignY = null;
          configY = o.y;
        } else if (o.top !== undefined) {
          alignY = 0;
          configY = o.top;
        } else if (o.bottom !== undefined) {
          alignY = 1;
          configY = o.bottom;
        } else if (o.centerY !== undefined) {
          alignY = 0.5;
          configY = o.centerY;
        }

        var percentageX, offsetX;

        if (configX !== undefined) {
          configX = configX.replace('left', '0%').replace('right', '100%').replace('center', '50%').split('%');
          percentageX = parseFloat(configX[0]) / 100;
          offsetX = configX[1] === '' ? 0 : parseFloat(configX[1]);
        }

        var percentageY, offsetY;

        if (configY !== undefined) {
          configY = configY.replace('top', '0%').replace('bottom', '100%').replace('center', '50%').split('%');
          percentageY = parseFloat(configY[0]) / 100;
          offsetY = configY[1] === '' ? 0 : parseFloat(configY[1]);
        } // Size


        var configWidth = o.width;
        var percentageWidth, paddingWidth;

        if (configWidth !== undefined) {
          configWidth = configWidth.split('%');
          percentageWidth = parseFloat(configWidth[0]) / 100;
          paddingWidth = configWidth[1] === '' ? 0 : parseFloat(configWidth[1]);
        }

        var configHeight = o.height;
        var percentageHeight, paddingHeight;

        if (configHeight !== undefined) {
          configHeight = configHeight.split('%');
          percentageHeight = parseFloat(configHeight[0]) / 100;
          paddingHeight = configHeight[1] === '' ? 0 : parseFloat(configHeight[1]);
        } // Position


        this.setAlign(alignX, alignY);
        this.setPercentage(percentageX, percentageY);
        this.setOffset(offsetX, offsetY); // Size

        this.setSizePercentage(percentageWidth, percentageHeight);
        this.setSizePadding(paddingWidth, paddingHeight);
        var onResizeCallback = o.onResizeCallback;
        var onResizeCallbackScope = o.onResizeCallbackScope;

        if (onResizeCallback !== undefined) {
          this.setResizeCallback(onResizeCallback, onResizeCallbackScope);
        }

        var onUpdateViewportCallback = o.onUpdateViewportCallback;
        var onUpdateViewportCallbackScope = o.onUpdateViewportCallbackScope;

        if (onUpdateViewportCallback !== undefined) {
          this.setUpdateViewportCallback(onUpdateViewportCallback, onUpdateViewportCallbackScope);
        }

        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        this.scene.scale.on('resize', this.anchor, this);
        this.anchor();
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        this.scene.scale.off('resize', this.anchor, this);
        this.viewport = undefined;
        this.onUpdateViewportCallback = undefined;
        this.onUpdateViewportCallbackScope = undefined;
        this.onResizeCallback = undefined;
        this.onResizeCallbackScope = undefined;

        _get(_getPrototypeOf(Anchor.prototype), "shutdown", this).call(this, fromScene);
      } // Position

    }, {
      key: "setAlign",
      value: function setAlign(x, y) {
        this.alignX = x;
        this.alignY = y;
        return this;
      }
    }, {
      key: "setPercentage",
      value: function setPercentage(x, y) {
        this.percentageX = x;
        this.percentageY = y;
        return this;
      }
    }, {
      key: "setOffset",
      value: function setOffset(x, y) {
        this.offsetX = x;
        this.offsetY = y;
        return this;
      } // Size

    }, {
      key: "setSizePercentage",
      value: function setSizePercentage(width, height) {
        this.percentageWidth = width;
        this.percentageHeight = height;
        return this;
      }
    }, {
      key: "setSizePadding",
      value: function setSizePadding(width, height) {
        this.paddingWidth = width;
        this.paddingHeight = height;
        return this;
      }
    }, {
      key: "setResizeCallback",
      value: function setResizeCallback(callback, scope) {
        this.onResizeCallback = callback;
        this.onResizeCallbackScope = scope;
        return this;
      }
    }, {
      key: "setUpdateViewportCallback",
      value: function setUpdateViewportCallback(callback, scope) {
        this.onUpdateViewportCallback = callback;
        this.onUpdateViewportCallbackScope = scope;
        return this;
      }
    }, {
      key: "anchor",
      value: function anchor() {
        this.updateViewport();
        this.updateSize();
        this.updatePosition();
        return this;
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        var callback = this.onResizeCallback,
            scope = this.onResizeCallbackScope;
        var newWidth = this.anchorWidth,
            newHeight = this.anchorHeight;

        if (newWidth === undefined && newHeight === undefined || !callback) {
          return;
        }

        var gameObject = this.parent;

        if (newWidth === undefined) {
          newWidth = gameObject.width;
        }

        if (newHeight === undefined) {
          newHeight = gameObject.height;
        }

        if (scope) {
          callback.call(scope, newWidth, newHeight, gameObject, this);
        } else {
          callback(newWidth, newHeight, gameObject, this);
        }
      }
    }, {
      key: "updatePosition",
      value: function updatePosition() {
        var gameObject = this.parent;

        if (this.alignX === null) {
          gameObject.x = this.anchorX;
        } else if (this.alignX !== undefined) {
          gameObject.x = this.anchorX + gameObject.displayWidth * (gameObject.originX - this.alignX);
        }

        if (this.alignY === null) {
          gameObject.y = this.anchorY;
        } else if (this.alignY !== undefined) {
          gameObject.y = this.anchorY + gameObject.displayHeight * (gameObject.originY - this.alignY);
        }

        return this;
      }
    }, {
      key: "anchorX",
      get: function get() {
        return this.viewport.x + this.viewport.width * this.percentageX + this.offsetX;
      }
    }, {
      key: "anchorY",
      get: function get() {
        return this.viewport.y + this.viewport.height * this.percentageY + this.offsetY;
      }
    }, {
      key: "anchorWidth",
      get: function get() {
        if (this.percentageWidth === undefined) {
          return undefined;
        }

        return this.viewport.width * this.percentageWidth + this.paddingWidth;
      }
    }, {
      key: "anchorHeight",
      get: function get() {
        if (this.percentageHeight === undefined) {
          return undefined;
        }

        return this.viewport.height * this.percentageHeight + this.paddingHeight;
      }
    }, {
      key: "updateViewport",
      value: function updateViewport() {
        this.viewport = GetViewport(this.scene, this.viewport ? this.viewport : true);
        var callback = this.onUpdateViewportCallback,
            scope = this.onUpdateViewportCallbackScope;

        if (callback) {
          if (scope) {
            callback.call(scope, this.viewport, this.parent, this);
          } else {
            callback(this.viewport, this.parent, this);
          }
        }
      }
    }]);

    return Anchor;
  }(ComponentBase);

  var SetAnchor = function SetAnchor(config) {
    if (config === undefined) {
      config = {};
    } // Assign default onResizeCallback if not given    


    var hasMinWidth = config.hasOwnProperty('width');
    var hasMinHeight = config.hasOwnProperty('height');
    var hasOnResizeCallback = config.hasOwnProperty('onResizeCallback');

    if ((hasMinWidth || hasMinHeight) && !hasOnResizeCallback) {
      config.onResizeCallback = function (width, height, sizer) {
        if (hasMinWidth) {
          sizer.setMinWidth(width);
        }

        if (hasMinHeight) {
          sizer.setMinHeight(height);
        }

        sizer.layout();
      };
    }

    if (this._anchor === undefined) {
      this._anchor = new Anchor(this, config);
    } else {
      this._anchor.resetFromJSON(config);
    }

    return this;
  };

  var GetValue$c = Phaser.Utils.Objects.GetValue;

  var TickTask = /*#__PURE__*/function (_ComponentBase) {
    _inherits(TickTask, _ComponentBase);

    var _super = _createSuper(TickTask);

    function TickTask(parent, config) {
      var _this;

      _classCallCheck(this, TickTask);

      _this = _super.call(this, parent, config);
      _this._isRunning = false;
      _this.isPaused = false;
      _this.tickingState = false;

      _this.setTickingMode(GetValue$c(config, 'tickingMode', 1)); // boot() later


      return _this;
    } // override


    _createClass(TickTask, [{
      key: "boot",
      value: function boot() {
        if (this.tickingMode === 2 && !this.tickingState) {
          this.startTicking();
        }
      } // override

    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        this.stop();

        if (this.tickingState) {
          this.stopTicking();
        }

        _get(_getPrototypeOf(TickTask.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "setTickingMode",
      value: function setTickingMode(mode) {
        if (typeof mode === 'string') {
          mode = TICKINGMODE[mode];
        }

        this.tickingMode = mode;
      } // override

    }, {
      key: "startTicking",
      value: function startTicking() {
        this.tickingState = true;
      } // override

    }, {
      key: "stopTicking",
      value: function stopTicking() {
        this.tickingState = false;
      }
    }, {
      key: "isRunning",
      get: function get() {
        return this._isRunning;
      },
      set: function set(value) {
        if (this._isRunning === value) {
          return;
        }

        this._isRunning = value;

        if (this.tickingMode === 1 && value != this.tickingState) {
          if (value) {
            this.startTicking();
          } else {
            this.stopTicking();
          }
        }
      }
    }, {
      key: "start",
      value: function start() {
        this.isPaused = false;
        this.isRunning = true;
        return this;
      }
    }, {
      key: "pause",
      value: function pause() {
        // Only can ba paused in running state
        if (this.isRunning) {
          this.isPaused = true;
          this.isRunning = false;
        }

        return this;
      }
    }, {
      key: "resume",
      value: function resume() {
        // Only can ba resumed in paused state (paused from running state)
        if (this.isPaused) {
          this.isRunning = true;
        }

        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.isPaused = false;
        this.isRunning = false;
        return this;
      }
    }, {
      key: "complete",
      value: function complete() {
        this.isPaused = false;
        this.isRunning = false;
        this.emit('complete', this.parent, this);
      }
    }]);

    return TickTask;
  }(ComponentBase);

  var TICKINGMODE = {
    'no': 0,
    'lazy': 1,
    'always': 2
  };

  var SceneUpdateTickTask = /*#__PURE__*/function (_TickTask) {
    _inherits(SceneUpdateTickTask, _TickTask);

    var _super = _createSuper(SceneUpdateTickTask);

    function SceneUpdateTickTask() {
      _classCallCheck(this, SceneUpdateTickTask);

      return _super.apply(this, arguments);
    }

    _createClass(SceneUpdateTickTask, [{
      key: "startTicking",
      value: function startTicking() {
        _get(_getPrototypeOf(SceneUpdateTickTask.prototype), "startTicking", this).call(this);

        this.scene.events.on('update', this.update, this);
      }
    }, {
      key: "stopTicking",
      value: function stopTicking() {
        _get(_getPrototypeOf(SceneUpdateTickTask.prototype), "stopTicking", this).call(this);

        if (this.scene) {
          // Scene might be destoryed
          this.scene.events.off('update', this.update, this);
        }
      } // update(time, delta) {
      //     
      // }

    }]);

    return SceneUpdateTickTask;
  }(TickTask);

  var GetValue$b = Phaser.Utils.Objects.GetValue;
  var Clamp = Phaser.Math.Clamp;

  var Timer = /*#__PURE__*/function () {
    function Timer(config) {
      _classCallCheck(this, Timer);

      this.resetFromJSON(config);
    }

    _createClass(Timer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.state = GetValue$b(o, 'state', IDLE);
        this.timeScale = GetValue$b(o, 'timeScale', 1);
        this.delay = GetValue$b(o, 'delay', 0);
        this.repeat = GetValue$b(o, 'repeat', 0);
        this.repeatCounter = GetValue$b(o, 'repeatCounter', 0);
        this.duration = GetValue$b(o, 'duration', 0);
        this.nowTime = GetValue$b(o, 'nowTime', 0);
        this.justRestart = GetValue$b(o, 'justRestart', false);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          state: this.state,
          timeScale: this.timeScale,
          delay: this.delay,
          repeat: this.repeat,
          repeatCounter: this.repeatCounter,
          duration: this.duration,
          nowTime: this.nowTime,
          justRestart: this.justRestart
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "setTimeScale",
      value: function setTimeScale(timeScale) {
        this.timeScale = timeScale;
        return this;
      }
    }, {
      key: "setDelay",
      value: function setDelay(delay) {
        if (delay === undefined) {
          delay = 0;
        }

        this.delay = delay;
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(duration) {
        this.duration = duration;
        return this;
      }
    }, {
      key: "setRepeat",
      value: function setRepeat(repeat) {
        this.repeat = repeat;
        return this;
      }
    }, {
      key: "setRepeatInfinity",
      value: function setRepeatInfinity() {
        this.repeat = -1;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        this.nowTime = this.delay > 0 ? -this.delay : 0;
        this.state = this.nowTime >= 0 ? COUNTDOWN : DELAY;
        this.repeatCounter = 0;
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.state = IDLE;
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (this.state === IDLE || this.state === DONE || delta === 0 || this.timeScale === 0) {
          return;
        }

        this.nowTime += delta * this.timeScale;
        this.state = this.nowTime >= 0 ? COUNTDOWN : DELAY;
        this.justRestart = false;

        if (this.nowTime >= this.duration) {
          if (this.repeat === -1 || this.repeatCounter < this.repeat) {
            this.repeatCounter++;
            this.justRestart = true;
            this.nowTime -= this.duration;
          } else {
            this.nowTime = this.duration;
            this.state = DONE;
          }
        }
      }
    }, {
      key: "t",
      get: function get() {
        var t;

        switch (this.state) {
          case IDLE:
          case DELAY:
            t = 0;
            break;

          case COUNTDOWN:
            t = this.nowTime / this.duration;
            break;

          case DONE:
            t = 1;
            break;
        }

        return Clamp(t, 0, 1);
      },
      set: function set(value) {
        value = Clamp(value, -1, 1);

        if (value < 0) {
          this.state = DELAY;
          this.nowTime = -this.delay * value;
        } else {
          this.state = COUNTDOWN;
          this.nowTime = this.duration * value;

          if (value === 1 && this.repeat !== 0) {
            this.repeatCounter++;
          }
        }
      }
    }, {
      key: "isIdle",
      get: function get() {
        return this.state === IDLE;
      }
    }, {
      key: "isDelay",
      get: function get() {
        return this.state === DELAY;
      }
    }, {
      key: "isCountDown",
      get: function get() {
        return this.state === COUNTDOWN;
      }
    }, {
      key: "isRunning",
      get: function get() {
        return this.state === DELAY || this.state === COUNTDOWN;
      }
    }, {
      key: "isDone",
      get: function get() {
        return this.state === DONE;
      }
    }, {
      key: "isOddIteration",
      get: function get() {
        return (this.repeatCounter & 1) === 1;
      }
    }, {
      key: "isEvenIteration",
      get: function get() {
        return (this.repeatCounter & 1) === 0;
      }
    }]);

    return Timer;
  }();

  var IDLE = 0;
  var DELAY = 1;
  var COUNTDOWN = 2;
  var DONE = -1;

  var TimerTickTask = /*#__PURE__*/function (_TickTask) {
    _inherits(TimerTickTask, _TickTask);

    var _super = _createSuper(TimerTickTask);

    function TimerTickTask(parent, config) {
      var _this;

      _classCallCheck(this, TimerTickTask);

      _this = _super.call(this, parent, config);
      _this.timer = new Timer(); // boot() later 

      return _this;
    } // override


    _createClass(TimerTickTask, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        _get(_getPrototypeOf(TimerTickTask.prototype), "shutdown", this).call(this, fromScene);

        this.timer.destroy();
        this.timer = undefined;
      }
    }, {
      key: "start",
      value: function start() {
        this.timer.start();

        _get(_getPrototypeOf(TimerTickTask.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.timer.stop();

        _get(_getPrototypeOf(TimerTickTask.prototype), "stop", this).call(this);

        return this;
      }
    }, {
      key: "complete",
      value: function complete() {
        this.timer.stop();

        _get(_getPrototypeOf(TimerTickTask.prototype), "complete", this).call(this);

        return this;
      }
    }]);

    return TimerTickTask;
  }(SceneUpdateTickTask);

  var GetValue$a = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$3 = Phaser.Utils.Objects.GetAdvancedValue;
  var GetEaseFunction = Phaser.Tweens.Builders.GetEaseFunction;

  var EaseValueTaskBase = /*#__PURE__*/function (_TickTask) {
    _inherits(EaseValueTaskBase, _TickTask);

    var _super = _createSuper(EaseValueTaskBase);

    function EaseValueTaskBase() {
      _classCallCheck(this, EaseValueTaskBase);

      return _super.apply(this, arguments);
    }

    _createClass(EaseValueTaskBase, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.timer.resetFromJSON(GetValue$a(o, 'timer'));
        this.setEnable(GetValue$a(o, 'enable', true));
        this.setDelay(GetAdvancedValue$3(o, 'delay', 0));
        this.setDuration(GetAdvancedValue$3(o, 'duration', 1000));
        this.setEase(GetValue$a(o, 'ease', 'Linear'));
        this.setRepeat(GetValue$a(o, 'repeat', 0));
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e == undefined) {
          e = true;
        }

        this.enable = e;
        return this;
      }
    }, {
      key: "setDelay",
      value: function setDelay(time) {
        this.delay = time;
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(time) {
        this.duration = time;
        return this;
      }
    }, {
      key: "setEase",
      value: function setEase(ease) {
        if (ease === undefined) {
          ease = 'Linear';
        }

        this.ease = ease;
        this.easeFn = GetEaseFunction(ease);
        return this;
      }
    }, {
      key: "setRepeat",
      value: function setRepeat(repeat) {
        this.repeat = repeat;
        return this;
      } // Override

    }, {
      key: "start",
      value: function start() {
        // Ignore start if timer is running, i.e. in DELAY, o RUN state
        if (this.timer.isRunning) {
          return this;
        }

        _get(_getPrototypeOf(EaseValueTaskBase.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "restart",
      value: function restart() {
        this.timer.stop();
        this.start.apply(this, arguments);
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (!this.isRunning || !this.enable) {
          return this;
        }

        var gameObject = this.parent;

        if (!gameObject.active) {
          return this;
        }

        var timer = this.timer;
        timer.update(time, delta); // isDelay, isCountDown, isDone

        if (!timer.isDelay) {
          this.updateGameObject(gameObject, timer);
        }

        this.emit('update', gameObject, this);

        if (timer.isDone) {
          this.complete();
        }

        return this;
      } // Override

    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {}
    }]);

    return EaseValueTaskBase;
  }(TimerTickTask);

  var GetValue$9 = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$2 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$2 = Phaser.Math.Linear;

  var Scale = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(Scale, _EaseValueTaskBase);

    var _super = _createSuper(Scale);

    function Scale(gameObject, config) {
      var _this;

      _classCallCheck(this, Scale);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;
      // this.timer

      _this.scaleStart = {};
      _this.scaleEnd = {};

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(Scale, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Scale.prototype), "resetFromJSON", this).call(this, o);

        this.setMode(GetValue$9(o, 'mode', 0));
        this.setScaleRange(GetAdvancedValue$2(o, 'start', undefined), GetAdvancedValue$2(o, 'end', 0));
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE$2[m];
        }

        this.mode = m;
        return this;
      }
    }, {
      key: "setScaleRange",
      value: function setScaleRange(start, end) {
        if (typeof start === 'number') {
          this.startX = start;
          this.startY = start;
        } else {
          this.startX = GetAdvancedValue$2(start, 'x', this.parent.scaleX);
          this.startY = GetAdvancedValue$2(start, 'y', this.parent.scaleY);
        }

        if (typeof end === 'number') {
          this.endX = end;
          this.endY = end;
        } else {
          this.endX = GetAdvancedValue$2(end, 'x', undefined);
          this.endY = GetAdvancedValue$2(end, 'y', undefined);
        }

        this.hasScaleX = this.startX !== undefined && this.endX !== undefined;
        this.hasScaleY = this.startY !== undefined && this.endY !== undefined;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }

        var gameObject = this.parent;

        if (this.hasScaleX) {
          gameObject.scaleX = this.startX;
        }

        if (this.hasScaleY) {
          gameObject.scaleY = this.startY;
        }

        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(this.mode === 2 ? -1 : 0);

        _get(_getPrototypeOf(Scale.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;

        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }

        t = this.easeFn(t);

        if (this.hasScaleX) {
          gameObject.scaleX = Linear$2(this.startX, this.endX, t);
        }

        if (this.hasScaleY) {
          gameObject.scaleY = Linear$2(this.startY, this.endY, t);
        }
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(Scale.prototype), "complete", this).call(this);

        if (this.mode === 1) {
          this.parent.destroy(); // Will also destroy this behavior
        }

        return this;
      }
    }]);

    return Scale;
  }(EaseValueTaskBase);

  var MODE$2 = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var PopUp = function PopUp(gameObject, duration, orientation, ease, scale) {
    var start;

    switch (orientation) {
      case 0:
      case 'x':
        start = {
          x: 0
        };
        break;

      case 1:
      case 'y':
        start = {
          y: 0
        };
        break;

      default:
        start = 0;
        break;
    }

    var config = {
      mode: 0,
      start: start,
      end: 1,
      duration: duration,
      ease: ease === undefined ? 'Cubic' : ease
    };

    if (scale === undefined) {
      scale = new Scale(gameObject, config);
    } else {
      scale.resetFromJSON(config);
    }

    scale.restart();
    return scale;
  };

  var ScaleDownDestroy = function ScaleDownDestroy(gameObject, duration, orientation, ease, destroyMode, scale) {
    if (destroyMode instanceof Scale) {
      scale = destroyMode;
      destroyMode = undefined;
    }

    if (destroyMode === undefined) {
      destroyMode = true;
    }

    var config = {};
    config.mode = destroyMode ? 1 : 0;

    switch (orientation) {
      case 0:
      case 'x':
        config.end = {
          x: 0
        };
        break;

      case 1:
      case 'y':
        config.end = {
          y: 0
        };
        break;

      default:
        config.end = 0;
        break;
    }

    config.duration = duration;
    config.ease = ease === undefined ? 'Linear' : ease;

    if (scale === undefined) {
      scale = new Scale(gameObject, config);
    } else {
      scale.resetFromJSON(config);
    }

    scale.restart();
    return scale;
  };

  var WaitEvent = function WaitEvent(eventEmitter, eventName) {
    return new Promise(function (resolve, reject) {
      eventEmitter.once(eventName, function () {
        resolve();
      });
    });
  };

  var WaitComplete = function WaitComplete(eventEmitter) {
    return WaitEvent(eventEmitter, 'complete');
  };

  var IsPlainObject$5 = Phaser.Utils.Objects.IsPlainObject;

  var OnInitScale = function OnInitScale(gameObject, scale) {
    // Route 'complete' of scale to gameObject
    scale.completeEventName = undefined;
    scale.on('complete', function () {
      if (scale.completeEventName) {
        gameObject.emit(scale.completeEventName, gameObject);
        scale.completeEventName = undefined;
      }
    }); // Update local state

    scale.on('update', function () {
      var parent = gameObject.getParentSizer();

      if (parent) {
        parent.resetChildPositionState(gameObject);
      }
    });
  };

  var ScaleMethods = {
    popUp: function popUp(duration, orientation, ease) {
      if (IsPlainObject$5(duration)) {
        var config = duration;
        duration = config.duration;
        orientation = config.orientation;
        ease = config.ease;
      }

      var isInit = this._scale === undefined;
      this._scale = PopUp(this, duration, orientation, ease, this._scale);

      if (isInit) {
        OnInitScale(this, this._scale);
      }

      this._scale.completeEventName = 'popup.complete';
      return this;
    },
    popUpPromise: function popUpPromise(duration, orientation, ease) {
      this.popUp(duration, orientation, ease);
      return WaitComplete(this._scale);
    },
    scaleDownDestroy: function scaleDownDestroy(duration, orientation, ease, destroyMode) {
      if (IsPlainObject$5(duration)) {
        var config = duration;
        duration = config.duration;
        orientation = config.orientation;
        ease = config.ease;
        destroyMode = config.destroy;
      }

      var isInit = this._scale === undefined;
      this._scale = ScaleDownDestroy(this, duration, orientation, ease, destroyMode, this._scale);

      if (isInit) {
        OnInitScale(this, this._scale);
      }

      this._scale.completeEventName = 'scaledown.complete';
      return this;
    },
    scaleDownDestroyPromise: function scaleDownDestroyPromise(duration, orientation, ease, destroyMode) {
      this.scaleDownDestroy(duration, orientation, ease, destroyMode);
      return WaitComplete(this._scale);
    },
    scaleDown: function scaleDown(duration, orientation, ease) {
      this.scaleDownDestroy(duration, orientation, ease, false);
      return this;
    },
    scaleDownPromise: function scaleDownPromise(duration, orientation, ease) {
      this.scaleDown(duration, orientation, ease);
      return WaitComplete(this._scale);
    }
  };

  var GetValue$8 = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$1 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$1 = Phaser.Math.Linear;

  var Fade = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(Fade, _EaseValueTaskBase);

    var _super = _createSuper(Fade);

    function Fade(gameObject, config) {
      var _this;

      _classCallCheck(this, Fade);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(Fade, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Fade.prototype), "resetFromJSON", this).call(this, o);

        this.setMode(GetValue$8(o, 'mode', 0));
        this.setAlphaRange(GetAdvancedValue$1(o, 'start', this.parent.alpha), GetAdvancedValue$1(o, 'end', 0));
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE$1[m];
        }

        this.mode = m;
        return this;
      }
    }, {
      key: "setAlphaRange",
      value: function setAlphaRange(start, end) {
        this.alphaStart = start;
        this.alphaEnd = end;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }

        var gameObject = this.parent;
        gameObject.setAlpha(this.alphaStart);
        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(this.mode === 2 ? -1 : 0);

        _get(_getPrototypeOf(Fade.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;

        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }

        gameObject.alpha = Linear$1(this.alphaStart, this.alphaEnd, t);
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(Fade.prototype), "complete", this).call(this);

        if (this.mode === 1) {
          this.parent.destroy(); // Will also destroy this behavior
        }

        return this;
      }
    }]);

    return Fade;
  }(EaseValueTaskBase);

  var MODE$1 = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var IsPlainObject$4 = Phaser.Utils.Objects.IsPlainObject;

  var FadeIn = function FadeIn(gameObject, duration, alpha, fade) {
    var startAlpha, endAlpha;

    if (IsPlainObject$4(alpha)) {
      startAlpha = alpha.start;
      endAlpha = alpha.end;
    } else {
      endAlpha = alpha;
    }

    if (startAlpha === undefined) {
      startAlpha = 0;
    }

    if (endAlpha === undefined) {
      endAlpha = 1;
    }

    var config = {
      mode: 0,
      start: startAlpha,
      end: endAlpha,
      duration: duration
    };

    if (fade === undefined) {
      fade = new Fade(gameObject, config);
    } else {
      fade.resetFromJSON(config);
    }

    fade.restart();
    return fade;
  };

  var FadeOutDestroy = function FadeOutDestroy(gameObject, duration, destroyMode, fade) {
    if (destroyMode instanceof Fade) {
      fade = destroyMode;
      destroyMode = undefined;
    }

    if (destroyMode === undefined) {
      destroyMode = true;
    }

    var config = {
      mode: destroyMode ? 1 : 0,
      end: 0,
      duration: duration
    };

    if (fade === undefined) {
      fade = new Fade(gameObject, config);
    } else {
      fade.resetFromJSON(config);
    }

    fade.restart();
    return fade;
  };

  var IsPlainObject$3 = Phaser.Utils.Objects.IsPlainObject;

  var OnInitFade = function OnInitFade(gameObject, fade) {
    // Route 'complete' of fade to gameObject
    fade.completeEventName = undefined;
    fade.on('complete', function () {
      if (fade.completeEventName) {
        gameObject.emit(fade.completeEventName, gameObject);
        fade.completeEventName = undefined;
      }
    }); // Update local state

    fade.on('update', function () {
      var parent = gameObject.getParentSizer();

      if (parent) {
        parent.resetChildAlphaState(gameObject);
      }
    });
  };

  var FadeMethods = {
    fadeIn: function fadeIn(duration, alpha) {
      if (IsPlainObject$3(duration)) {
        var config = duration;
        duration = config.duration;
      }

      var isInit = this._fade === undefined;
      this._fade = FadeIn(this, duration, alpha, this._fade);

      if (isInit) {
        OnInitFade(this, this._fade);
      }

      this._fade.completeEventName = 'fadein.complete';
      return this;
    },
    fadeInPromoise: function fadeInPromoise(duration, alpha) {
      this.fadeIn(duration, alpha);
      return WaitComplete(this._fade);
    },
    fadeOutDestroy: function fadeOutDestroy(duration, destroyMode) {
      if (IsPlainObject$3(duration)) {
        var config = duration;
        duration = config.duration;
        destroyMode = config.destroy;
      }

      var isInit = this._fade === undefined;
      this._fade = FadeOutDestroy(this, duration, destroyMode, this._fade);

      if (isInit) {
        OnInitFade(this, this._fade);
      }

      this._fade.completeEventName = 'fadeout.complete';
      return this;
    },
    fadeOutDestroyPromise: function fadeOutDestroyPromise(duration, destroyMode) {
      this.fadeOutDestroy(duration, destroyMode);
      return WaitComplete(this._fade);
    },
    fadeOut: function fadeOut(duration) {
      this.fadeOutDestroy(duration, false);
      return this;
    },
    fadeOutPromise: function fadeOutPromise(duration) {
      this.fadeOut(duration);
      return WaitComplete(this._fade);
    }
  };

  var GetValue$7 = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear = Phaser.Math.Linear;

  var EaseMove = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(EaseMove, _EaseValueTaskBase);

    var _super = _createSuper(EaseMove);

    function EaseMove(gameObject, config) {
      var _this;

      _classCallCheck(this, EaseMove);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(EaseMove, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(EaseMove.prototype), "resetFromJSON", this).call(this, o);

        this.setMode(GetValue$7(o, 'mode', 0));

        if (o && (o.hasOwnProperty('x') || o.hasOwnProperty('y'))) {
          var endX = GetAdvancedValue(o, 'x', undefined);
          var endY = GetAdvancedValue(o, 'y', undefined);
          this.setTargetPosition(endX, endY);
        } else {
          this.setTargetPosition(o);
        }

        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE[m];
        }

        this.mode = m;
        return this;
      }
    }, {
      key: "setTargetPosition",
      value: function setTargetPosition(x, y) {
        if (typeof x === 'number' || typeof y === 'number') {
          // endX, endY
          // x,y : a number, or undefined
          this.startX = this.parent.x;
          this.startY = this.parent.y;
          this.endX = x;
          this.endY = y;
        } else {
          var config = x;
          this.startX = GetAdvancedValue(config, 'startX', undefined);
          this.startY = GetAdvancedValue(config, 'startY', undefined);
          this.endX = GetAdvancedValue(config, 'endX', undefined);
          this.endY = GetAdvancedValue(config, 'endY', undefined);
        }

        this.hasMoveX = this.startX !== undefined && this.endX !== undefined;
        this.hasMoveY = this.startY !== undefined && this.endY !== undefined;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }

        var gameObject = this.parent;

        if (this.hasMoveX) {
          gameObject.x = this.startX;
        }

        if (this.hasMoveY) {
          gameObject.y = this.startY;
        }

        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(this.mode === 2 ? -1 : 0);

        _get(_getPrototypeOf(EaseMove.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;

        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }

        t = this.easeFn(t);

        if (this.hasMoveX) {
          gameObject.x = Linear(this.startX, this.endX, t);
        }

        if (this.hasMoveY) {
          gameObject.y = Linear(this.startY, this.endY, t);
        }
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(EaseMove.prototype), "complete", this).call(this);

        if (this.mode === 1) {
          this.parent.destroy(); // Will also destroy this behavior
        }

        return this;
      }
    }]);

    return EaseMove;
  }(EaseValueTaskBase);

  var MODE = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var ParseValue = function ParseValue(propertyValue, startValue) {
    // propertyValue : number or string
    if (typeof propertyValue === 'number') {
      return propertyValue;
    } else {
      var op = propertyValue[0];
      var num = parseFloat(propertyValue.substr(2));

      switch (op) {
        case '+':
          return startValue + num;

        case '-':
          return startValue - num;

        case '*':
          return startValue * num;

        case '/':
          return startValue / num;
      }
    }
  };

  var EaseMoveTo = function EaseMoveTo(gameObject, duration, endX, endY, ease, destroyMode, easeMove) {
    if (destroyMode instanceof EaseMove) {
      easeMove = destroyMode;
      destroyMode = undefined;
    }

    if (destroyMode === undefined) {
      destroyMode = false;
    }

    var config = {};
    config.mode = destroyMode ? 1 : 0;

    if (endX !== undefined) {
      config.startX = gameObject.x;
      config.endX = ParseValue(endX, gameObject.x);
    }

    if (endY !== undefined) {
      config.startY = gameObject.y;
      config.endY = ParseValue(endY, gameObject.y);
    }

    config.duration = duration;
    config.ease = ease === undefined ? 'Linear' : ease;

    if (easeMove === undefined) {
      easeMove = new EaseMove(gameObject, config);
    } else {
      easeMove.resetFromJSON(config);
    }

    easeMove.restart();
    return easeMove;
  };

  var EaseMoveFrom = function EaseMoveFrom(gameObject, duration, startX, startY, ease, destroyMode, easeMove) {
    if (destroyMode instanceof EaseMove) {
      easeMove = destroyMode;
      destroyMode = undefined;
    }

    if (destroyMode === undefined) {
      destroyMode = false;
    }

    var config = {};
    config.mode = destroyMode ? 1 : 0;

    if (startX !== undefined) {
      config.startX = ParseValue(startX, gameObject.x);
      config.endX = gameObject.x;
    }

    if (startY !== undefined) {
      config.startY = ParseValue(startY, gameObject.y);
      config.endY = gameObject.y;
    }

    config.duration = duration;
    config.ease = ease === undefined ? 'Linear' : ease;

    if (easeMove === undefined) {
      easeMove = new EaseMove(gameObject, config);
    } else {
      easeMove.resetFromJSON(config);
    }

    easeMove.restart();
    return easeMove;
  };

  var IsPlainObject$2 = Phaser.Utils.Objects.IsPlainObject;
  var DistanceBetween = Phaser.Math.Distance.Between;

  var OnInitEaseMove = function OnInitEaseMove(gameObject, easeMove) {
    // Route 'complete' of easeMove to gameObject
    easeMove.completeEventName = undefined;
    easeMove.on('complete', function () {
      if (easeMove.completeEventName) {
        gameObject.emit(easeMove.completeEventName, gameObject);
        easeMove.completeEventName = undefined;
      }
    }); // Update local state

    easeMove.on('update', function () {
      var parent = gameObject.getParentSizer();

      if (parent) {
        parent.resetChildPositionState(gameObject);
      }
    });
  };

  var EaseMoveMethods = {
    moveFrom: function moveFrom(duration, x, y, ease, destroyMode) {
      if (IsPlainObject$2(duration)) {
        var config = duration;
        x = config.x;
        y = config.y;

        if (config.hasOwnProperty('speed')) {
          duration = DistanceBetween(x, y, this.x, this.y) * 1000 / config.speed;
        } else {
          duration = config.duration;
        }

        ease = config.ease;
      }

      var isInit = this._easeMove === undefined;
      this._easeMove = EaseMoveFrom(this, duration, x, y, ease, destroyMode, this._easeMove);

      if (isInit) {
        OnInitEaseMove(this, this._easeMove);
      }

      this._easeMove.completeEventName = 'movefrom.complete';
      return this;
    },
    moveFromPromise: function moveFromPromise(duration, x, y, ease, destroyMode) {
      this.moveFrom(duration, x, y, ease, destroyMode);
      return WaitComplete(this._easeMove);
    },
    moveFromDestroy: function moveFromDestroy(duration, x, y, ease) {
      this.moveFrom(duration, x, y, ease, true);
      return this;
    },
    moveFromDestroyPromise: function moveFromDestroyPromise(duration, x, y, ease) {
      this.moveFromDestroy(duration, x, y, ease);
      return WaitComplete(this._easeMove);
    },
    moveTo: function moveTo(duration, x, y, ease, destroyMode) {
      if (IsPlainObject$2(duration)) {
        var config = duration;
        x = config.x;
        y = config.y;

        if (config.hasOwnProperty('speed')) {
          duration = DistanceBetween(x, y, this.x, this.y) * 1000 / config.speed;
        } else {
          duration = config.duration;
        }

        ease = config.ease;
      }

      var isInit = this._easeMove === undefined;
      this._easeMove = EaseMoveTo(this, duration, x, y, ease, destroyMode, this._easeMove);

      if (isInit) {
        OnInitEaseMove(this, this._easeMove);
      }

      this._easeMove.completeEventName = 'moveto.complete';
      return this;
    },
    moveToPromise: function moveToPromise(duration, x, y, ease, destroyMode) {
      this.moveTo(duration, x, y, ease, destroyMode);
      return WaitComplete(this._easeMove);
    },
    moveToDestroy: function moveToDestroy(duration, x, y, ease) {
      this.moveTo(duration, x, y, ease, true);
      return this;
    },
    moveToDestroyPromise: function moveToDestroyPromise(duration, x, y, ease) {
      this.moveToDestroy(duration, x, y, ease, true);
      return WaitComplete(this._easeMove);
    }
  };

  var Show = function Show(gameObject) {
    _hide(gameObject, false);
  };

  var Hide = function Hide(gameObject) {
    _hide(gameObject, true);
  };

  var IsShown = function IsShown(gameObject) {
    if (!gameObject) {
      return false;
    }

    var config = GetSizerConfig(gameObject);
    return !config.hidden;
  };

  var _hide = function _hide(gameObject, hidden) {
    if (!gameObject) {
      return;
    }

    var config = GetSizerConfig(gameObject);
    config.hidden = hidden;
    gameObject.rexContainer.parent.setChildVisible(gameObject, !hidden);
  };

  var HideMethods = {
    show: function show(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      Show(gameObject);
      return this;
    },
    hide: function hide(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      Hide(gameObject);
      return this;
    },
    isShow: function isShow(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      return IsShown(gameObject);
    }
  };

  var IsPointInBounds = function IsPointInBounds(gameObject, x, y, preTest, postTest) {
    // Can't get bounds
    if (!gameObject || !gameObject.getBounds) {
      return false;
    }

    if (preTest && !preTest(gameObject, x, y)) {
      return false;
    }

    globRect = gameObject.getBounds(globRect);

    if (!globRect.contains(x, y)) {
      return false;
    }

    if (postTest && !postTest(gameObject, x, y)) {
      return false;
    }

    return true;
  };

  var globRect = undefined;

  var IsPointerInBounds = function IsPointerInBounds(gameObject, pointer, preTest, postTest) {
    if (pointer) {
      return IsPointInBounds(gameObject, pointer.x, pointer.y, preTest, postTest);
    } else {
      var inputManager = gameObject.scene.input.manager;
      var pointersTotal = inputManager.pointersTotal;
      var pointers = inputManager.pointers;

      for (var i = 0; i < pointersTotal; i++) {
        pointer = pointers[i];

        if (IsPointInBounds(gameObject, pointer.x, pointer.y, preTest, postTest)) {
          return true;
        }
      }

      return false;
    }
  };

  var IsInTouching = function IsInTouching(pointer, gameObject) {
    if (gameObject === undefined) {
      gameObject = this;
    }

    return IsPointerInBounds(gameObject, pointer);
  };

  var IsFunction = function IsFunction(obj) {
    return obj && typeof obj === 'function';
  };

  var ContainsPoint = function ContainsPoint(gameObject, x, y, preTest, postTest) {
    return IsPointInBounds(gameObject, x, y, GetPreTestCallback(preTest), GetPostTestCallback(postTest));
  };

  var IsNotHiddenSizer = function IsNotHiddenSizer(gameObject) {
    var isHiddenSizer = gameObject.rexSizer && gameObject.rexSizer.hidden;
    return !isHiddenSizer;
  };

  var GetPreTestCallback = function GetPreTestCallback(preTest) {
    if (!preTest) {
      return IsNotHiddenSizer;
    }

    return function (gameObject, x, y) {
      if (!IsNotHiddenSizer(gameObject)) {
        return false;
      }

      preTest(gameObject, x, y);
      return true;
    };
  };

  var GetPostTestCallback = function GetPostTestCallback(postTest) {
    return postTest;
  };

  var PointToChild = function PointToChild(x, y, preTest, postTest, children) {
    if (!IsFunction(preTest)) {
      children = preTest;
      preTest = undefined;
      postTest = undefined;
    }

    if (children === undefined) {
      if (this.sizerChildren) {
        children = this.sizerChildren;
      } else {
        children = this.children;
      }
    }

    if (IsArray(children)) {
      var child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (ContainsPoint(child, x, y, preTest, postTest)) {
          return child;
        }
      }
    } else {
      var child;

      for (var key in children) {
        child = children[key];

        if (ContainsPoint(child, x, y, preTest, postTest)) {
          return child;
        }
      }
    }

    return null;
  };

  var GetParentSizerMethods = {
    getParentSizer: function getParentSizer(gameObject) {
      return this.getParent(gameObject);
    },
    getTopmostSizer: function getTopmostSizer(gameObject) {
      return this.getTopmostParent(gameObject);
    }
  };

  var ResizeGameObject = function ResizeGameObject(gameObject, newWidth, newHeight) {
    if (!gameObject || newWidth === undefined && newHeight === undefined) {
      return;
    }

    if (gameObject.resize) {
      // Has `resize` method
      if (newWidth === undefined) {
        newWidth = gameObject.width;
      }

      if (newHeight === undefined) {
        newHeight = gameObject.height;
      }

      gameObject.resize(newWidth, newHeight);
    } else {
      // Set display width/height
      if (newWidth !== undefined) {
        gameObject.displayWidth = newWidth;
      }

      if (newHeight !== undefined) {
        gameObject.displayHeight = newHeight;
      }
    }
  };

  var CopyState = function CopyState(gamObject, out) {
    if (out === undefined) {
      out = {};
    } else if (out === true) {
      out = GlobState;
    }

    out.x = gamObject.x;
    out.y = gamObject.y;
    out.scaleX = gamObject.scaleX;
    out.scaleY = gamObject.scaleY;
    out.width = gamObject.width;
    out.height = gamObject.height;
    out.displayWidth = gamObject.displayWidth;
    out.displayHeight = gamObject.displayHeight;
    return out;
  };

  var GlobState = {};

  var PreLayoutChild = function PreLayoutChild(child) {
    if (this.sizerEventsEnable) {
      CopyState(child, this.getChildPrevState(child));
      this.layoutedChildren.push(child);
    }
  };

  var LayoutChild = function LayoutChild(child, x, y, width, height, align, offsetX, offsetY) {
    AlignIn(child, x, y, width, height, align);

    if (offsetX !== undefined) {
      child.x += offsetX;
    }

    if (offsetY !== undefined) {
      child.y += offsetY;
    }

    this.resetChildPositionState(child);

    if (this.sizerEventsEnable) {
      child.emit('sizer.postlayout', child, this);
    }
  };

  var ALIGN_CENTER$1 = Phaser.Display.Align.CENTER;

  var LayoutBackgrounds = function LayoutBackgrounds() {
    if (this.backgroundChildren === undefined) {
      return;
    }

    var backgrounds = this.backgroundChildren;
    var startX = this.left,
        startY = this.top;
    var parentWidth = this.width,
        parentHeight = this.height;
    var child, childConfig, padding, x, y, width, height;

    for (var i = 0, cnt = backgrounds.length; i < cnt; i++) {
      child = backgrounds[i];
      childConfig = child.rexSizer;

      if (childConfig.hidden) {
        continue;
      }

      padding = childConfig.padding;
      PreLayoutChild.call(this, child);
      x = startX + padding.left;
      y = startY + padding.top;
      width = parentWidth - padding.left - padding.right;
      height = parentHeight - padding.top - padding.bottom;
      ResizeGameObject(child, width, height);
      LayoutChild.call(this, child, x, y, width, height, ALIGN_CENTER$1);
    }
  };

  var SetDraggable = function SetDraggable(senser, draggable) {
    var senserType = _typeof(senser);

    if (senserType === 'string') {
      senser = this.getElement(senser);
    } else if (senser === undefined || senserType != 'object') {
      draggable = senser;
      senser = this;
    }

    if (draggable === undefined) {
      draggable = true;
    }

    if (senser.input && senser.input.hasOwnProperty('draggable')) {
      // Draggable is already registered
      senser.input.draggable = draggable;
    } else if (draggable) {
      // Register draggable
      senser.setInteractive();
      senser.scene.input.setDraggable(senser);
      senser.on('drag', function (pointer, dragX, dragY) {
        var topmostParent = this.getTopmostSizer();
        topmostParent.x += dragX - senser.x;
        topmostParent.y += dragY - senser.y;
      }, this);
    } else ;

    return this;
  };

  var GetValue$6 = Phaser.Utils.Objects.GetValue;

  var Button = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Button, _ComponentBase);

    var _super = _createSuper(Button);

    function Button(gameObject, config) {
      var _this;

      _classCallCheck(this, Button);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;

      _this._enable = undefined;
      gameObject.setInteractive(GetValue$6(config, "inputConfig", undefined));

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(Button, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.pointer = undefined;
        this.lastClickTime = undefined;
        this.setEnable(GetValue$6(o, "enable", true));
        this.setMode(GetValue$6(o, "mode", 1));
        this.setClickInterval(GetValue$6(o, "clickInterval", 100));
        this.setDragThreshold(GetValue$6(o, 'threshold', undefined));
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        var gameObject = this.parent;
        gameObject.on('pointerdown', this.onPress, this);
        gameObject.on('pointerup', this.onRelease, this);
        gameObject.on('pointerout', this.onPointOut, this);
        gameObject.on('pointermove', this.onMove, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        } // GameObject events will be removed when this gameObject destroyed 
        // this.parent.on('pointerdown', this.onPress, this);
        // this.parent.on('pointerup', this.onRelease, this);
        // this.parent.on('pointerout', this.onPointOut, this);
        // this.parent.on('pointermove', this.onMove, this);


        this.pointer = null;

        _get(_getPrototypeOf(Button.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }

        if (!e) {
          this.cancel();
        }

        this._enable = e;
        var eventName = e ? 'enable' : 'disable';
        this.emit(eventName, this, this.parent);
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }

        this.enable = e;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = CLICKMODE[m];
        }

        this.mode = m;
        return this;
      }
    }, {
      key: "setClickInterval",
      value: function setClickInterval(interval) {
        this.clickInterval = interval; // ms

        return this;
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      } // internal

    }, {
      key: "onPress",
      value: function onPress(pointer, localX, localY, event) {
        if (this.pointer !== undefined) {
          return;
        }

        this.pointer = pointer;

        if (this.mode === 0) {
          this.click(pointer.downTime, pointer, event);
        }
      }
    }, {
      key: "onRelease",
      value: function onRelease(pointer, localX, localY, event) {
        if (this.pointer !== pointer) {
          return;
        }

        if (this.mode === 1) {
          this.click(pointer.upTime, pointer, event);
        }

        this.pointer = undefined;
      }
    }, {
      key: "onPointOut",
      value: function onPointOut(pointer, event) {
        if (this.pointer !== pointer) {
          return;
        }

        this.cancel();
      }
    }, {
      key: "onMove",
      value: function onMove(pointer, localX, localY, event) {
        if (this.pointer !== pointer) {
          return;
        }

        if (this.dragThreshold === undefined) {
          return;
        }

        if (pointer.getDistance() >= this.dragThreshold) {
          this.cancel();
        }
      }
    }, {
      key: "click",
      value: function click(nowTime, pointer, event) {
        if (!this.enable) {
          return this;
        }

        if (nowTime === undefined) {
          // fires 'click' event manually
          this.emit('click', this, this.parent, pointer, event);
          return this;
        }

        this.pointer = undefined;
        var lastClickTime = this.lastClickTime;

        if (lastClickTime !== undefined && nowTime - lastClickTime <= this.clickInterval) {
          return this;
        }

        this.lastClickTime = nowTime;
        this.emit('click', this, this.parent, pointer, event);
        return this;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.pointer = undefined;
        return this;
      }
    }]);

    return Button;
  }(ComponentBase);

  var CLICKMODE = {
    press: 0,
    pointerdown: 0,
    release: 1,
    pointerup: 1
  };

  var ClickMethods = {
    onClick: function onClick(callback, scope, config) {
      if (!callback) {
        return this;
      }

      if (this._click === undefined) {
        this._click = new Button(this, config);
      }

      this._click.on('click', callback, scope);

      return this;
    },
    offClick: function offClick(callback, scope) {
      if (this._click === undefined) {
        return this;
      }

      this._click.off('click', callback, scope);

      return this;
    },
    enableClick: function enableClick(enabled) {
      if (this._click === undefined) {
        return this;
      }

      this._click.setEnable(enabled);

      return this;
    },
    disableClick: function disableClick() {
      if (this._click === undefined) {
        return this;
      }

      this._click.setEnable(false);

      return this;
    }
  };

  var BroadcastEvent = function BroadcastEvent() {
    var gameObjects = this.getAllChildren([this]);

    for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
      var gameObject = gameObjects[i];
      gameObject.emit.apply(gameObject, arguments);
    }

    return this;
  };

  var methods$2 = {
    getSizerConfig: GetSizerConfig,
    getChildPrevState: GetChildPrevState,
    pushIntoBounds: PushIntoBounds,
    drawBounds: DrawBounds,
    resolveWidth: ResolveWidth$1,
    resolveChildrenWidth: ResolveChildrenWidth,
    resolveHeight: ResolveHeight$1,
    getChildWidth: GetChildWidth,
    getChildHeight: GetChildHeight,
    getExpandedChildWidth: GetExpandedChildWidth$1,
    getExpandedChildHeight: GetExpandedChildHeight$1,
    getChildrenWidth: GetChildrenWidth$1,
    getChildrenHeight: GetChildrenHeight$1,
    addChildrenMap: AddChildrenMap,
    addElement: AddChildrenMap,
    getElement: GetElement,
    getAllChildrenSizers: GetAllChildrenSizers,
    getChildrenSizers: GetChildrenSizers$1,
    preLayout: PreLayout$1,
    layout: Layout,
    runLayout: RunLayout,
    layoutChildren: LayoutChildren$1,
    runWidthWrap: RunWidthWrap,
    layoutBackgrounds: LayoutBackgrounds,
    postLayout: PostLayout,
    setAnchor: SetAnchor,
    isInTouching: IsInTouching,
    pointToChild: PointToChild,
    setDraggable: SetDraggable,
    broadcastEvent: BroadcastEvent
  };
  Object.assign(methods$2, PaddingMethods, AddChildMethods$2, GetParentSizerMethods, ScaleMethods, FadeMethods, EaseMoveMethods, ClickMethods, HideMethods, GetShownChildrenMethods);

  var GetValue$5 = Phaser.Utils.Objects.GetValue;

  var Base = /*#__PURE__*/function (_Container) {
    _inherits(Base, _Container);

    var _super = _createSuper(Base);

    function Base(scene, x, y, minWidth, minHeight, config) {
      var _this;

      _classCallCheck(this, Base);

      _this = _super.call(this, scene, x, y, 2, 2);
      _this.isRexSizer = true;

      _this.setMinSize(minWidth, minHeight);

      _this.setName(GetValue$5(config, 'name', ''));

      _this.rexSizer = {};
      _this.space = {};
      _this.backgroundChildren = undefined;
      _this.sizerChildren = undefined; // [] or {}

      _this.layoutedChildren = undefined;
      var anchorConfig = GetValue$5(config, 'anchor', undefined);

      if (anchorConfig) {
        _this.setAnchor(anchorConfig);
      }

      _this.setInnerPadding(GetValue$5(config, 'space', 0));

      _this.setDraggable(GetValue$5(config, 'draggable', false));

      _this.setSizerEventsEnable(GetValue$5(config, 'sizerEvents', false));

      _this.setDirty(true);

      return _this;
    }

    _createClass(Base, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene) {
          return;
        }

        if (fromScene) {
          // In this case, children will be cleared and destroy in scene level
          var sizers = this.getAllChildrenSizers([this]);

          for (var i = 0, cnt = sizers.length; i < cnt; i++) {
            sizers[i].sizerEventsEnable = false;
          }
        }

        _get(_getPrototypeOf(Base.prototype), "destroy", this).call(this, fromScene);

        this.backgroundChildren = undefined;
        this.sizerChildren = undefined;
        this.childrenMap = undefined;
        this.space = undefined;
        this.rexSizer = undefined;
        this.layoutedChildren = undefined;
      }
    }, {
      key: "setMinSize",
      value: function setMinSize(minWidth, minHeight) {
        this.setMinWidth(minWidth).setMinHeight(minHeight);
        return this;
      }
    }, {
      key: "setMinWidth",
      value: function setMinWidth(minWidth) {
        if (minWidth == null) {
          minWidth = 0;
        }

        this.minWidth = minWidth;
        return this;
      }
    }, {
      key: "setMinHeight",
      value: function setMinHeight(minHeight) {
        if (minHeight == null) {
          minHeight = 0;
        }

        this.minHeight = minHeight;
        return this;
      }
    }, {
      key: "setDirty",
      value: function setDirty(dirty) {
        if (dirty === undefined) {
          dirty = true;
        }

        this.dirty = dirty;
        return this;
      }
    }, {
      key: "setSizerEventsEnable",
      value: function setSizerEventsEnable(enable) {
        if (enable === undefined) {
          enable = true;
        }

        this.sizerEventsEnable = enable;
        return this;
      }
    }, {
      key: "ignoreLayout",
      get: function get() {
        // Skip hidden or !dirty sizer
        return this.rexSizer.hidden || !this.dirty;
      }
    }, {
      key: "childrenWidth",
      get: function get() {
        if (this._childrenWidth === undefined) {
          this._childrenWidth = this.getChildrenWidth();
        }

        return this._childrenWidth;
      }
    }, {
      key: "childrenHeight",
      get: function get() {
        if (this._childrenHeight === undefined) {
          this._childrenHeight = this.getChildrenHeight();
        }

        return this._childrenHeight;
      }
    }, {
      key: "left",
      get: function get() {
        return this.x - GetDisplayWidth(this) * this.originX;
      },
      set: function set(value) {
        this.x += value - this.left;
      }
    }, {
      key: "alignLeft",
      value: function alignLeft(value) {
        this.left = value;
        return this;
      }
    }, {
      key: "right",
      get: function get() {
        return this.left + GetDisplayWidth(this);
      },
      set: function set(value) {
        this.x += value - this.right;
      }
    }, {
      key: "alignRight",
      value: function alignRight(value) {
        this.right = value;
        return this;
      }
    }, {
      key: "centerX",
      get: function get() {
        return this.left + GetDisplayWidth(this) / 2;
      },
      set: function set(value) {
        this.x += value - this.centerX;
      }
    }, {
      key: "alignCenterX",
      value: function alignCenterX(value) {
        this.centerX = value;
        return this;
      }
    }, {
      key: "top",
      get: function get() {
        return this.y - GetDisplayHeight(this) * this.originY;
      },
      set: function set(value) {
        this.y += value - this.top;
      }
    }, {
      key: "alignTop",
      value: function alignTop(value) {
        this.top = value;
        return this;
      }
    }, {
      key: "bottom",
      get: function get() {
        return this.top + GetDisplayHeight(this);
      },
      set: function set(value) {
        this.y += value - this.bottom;
      }
    }, {
      key: "alignBottom",
      value: function alignBottom(value) {
        this.bottom = value;
        return this;
      }
    }, {
      key: "centerY",
      get: function get() {
        return this.top + GetDisplayHeight(this) / 2;
      },
      set: function set(value) {
        this.y += value - this.centerY;
      }
    }, {
      key: "alignCenterY",
      value: function alignCenterY(value) {
        this.centerY = value;
        return this;
      }
    }, {
      key: "innerLeft",
      get: function get() {
        return this.left + this.space.left;
      }
    }, {
      key: "innerRight",
      get: function get() {
        return this.right - this.space.right;
      }
    }, {
      key: "innerTop",
      get: function get() {
        return this.top + this.space.top;
      }
    }, {
      key: "innerBottom",
      get: function get() {
        return this.bottom - this.space.bottom;
      }
    }, {
      key: "innerWidth",
      get: function get() {
        return this.width - this.space.left - this.space.right;
      }
    }, {
      key: "innerHeight",
      get: function get() {
        return this.height - this.space.top - this.space.bottom;
      }
    }, {
      key: "minInnerWidth",
      get: function get() {
        var result = this.minWidth - this.space.left - this.space.right;
        return Math.max(result, 0);
      }
    }, {
      key: "minInnerHeight",
      get: function get() {
        var result = this.minHeight - this.space.top - this.space.bottom;
        return Math.max(result, 0);
      }
    }]);

    return Base;
  }(ContainerLite);

  Object.assign(Base.prototype, methods$2);

  var GetChildrenWidth = function GetChildrenWidth(minimumMode) {
    if (this.rexSizer.hidden) {
      return 0;
    }

    if (minimumMode === undefined) {
      minimumMode = true;
    }

    var result = 0;
    var children = this.sizerChildren;
    var child, padding, childWidth;

    if (this.orientation === 0) {
      // x
      // Get summation of minimum width
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (child.rexSizer.hidden) {
          continue;
        }

        if (child.rexSizer.proportion === 0 || minimumMode && child.rexSizer.proportion > 0) {
          childWidth = this.getChildWidth(child);
        } else {
          childWidth = 0;
        }

        padding = child.rexSizer.padding;
        childWidth += padding.left + padding.right;

        if (i > 0) {
          childWidth += this.space.item;
        }

        result += childWidth;
      }
    } else {
      // Get maximun width
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (!child.hasOwnProperty('rexSizer')) {
          continue;
        }

        if (child.rexSizer.hidden) {
          continue;
        }

        padding = child.rexSizer.padding;
        childWidth = this.getChildWidth(child) + padding.left + padding.right;
        result = Math.max(childWidth, result);
      }
    }

    return result + this.space.left + this.space.right;
  };

  var GetChildrenHeight = function GetChildrenHeight(minimumMode) {
    if (this.rexSizer.hidden) {
      return 0;
    }

    if (minimumMode === undefined) {
      minimumMode = true;
    }

    var result = 0;
    var children = this.sizerChildren;
    var child, padding, childHeight;

    if (this.orientation === 0) {
      // x
      // Get maximun height
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (child.rexSizer.hidden) {
          continue;
        }

        padding = child.rexSizer.padding;
        childHeight = this.getChildHeight(child) + padding.top + padding.bottom;
        result = Math.max(childHeight, result);
      }
    } else {
      // Get summation of minimum height
      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (!child.hasOwnProperty('rexSizer')) {
          continue;
        }

        if (child.rexSizer.hidden) {
          continue;
        }

        padding = child.rexSizer.padding;

        if (child.rexSizer.proportion === 0 || minimumMode && child.rexSizer.proportion > 0) {
          childHeight = this.getChildHeight(child);
        } else {
          childHeight = 0;
        }

        childHeight += padding.top + padding.bottom;

        if (i > 0) {
          childHeight += this.space.item;
        }

        result += childHeight;
      }
    }

    return result + this.space.top + this.space.bottom;
  };

  var GetExpandedChildWidth = function GetExpandedChildWidth(child, parentWidth) {
    if (parentWidth === undefined) {
      parentWidth = this.width;
    }

    var childWidth;
    var childConfig = child.rexSizer;
    var padding = childConfig.padding;

    if (this.orientation === 0) {
      // x
      if (childConfig.proportion > 0 && this.proportionLength > 0) {
        childWidth = childConfig.proportion * this.proportionLength;
      }
    } else {
      // y
      if (childConfig.expand) {
        var innerWidth = parentWidth - this.space.left - this.space.right;
        childWidth = innerWidth - padding.left - padding.right;
      }
    }

    return childWidth;
  };

  var GetExpandedChildHeight = function GetExpandedChildHeight(child, parentHeight) {
    if (parentHeight === undefined) {
      parentHeight = this.height;
    }

    var childHeight;
    var childConfig = child.rexSizer;
    var padding = childConfig.padding;

    if (this.orientation === 0) {
      // x
      if (childConfig.expand) {
        var innerHeight = parentHeight - this.space.top - this.space.bottom;
        childHeight = innerHeight - padding.top - padding.bottom;
      }
    } else {
      // y
      if (childConfig.proportion > 0 && this.proportionLength > 0) {
        childHeight = childConfig.proportion * this.proportionLength;
      }
    }

    return childHeight;
  };

  var GetChildrenSizers = function GetChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }

    var children = this.sizerChildren,
        child;

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];

      if (child.isRexSizer) {
        out.push(child);
      }
    }

    return out;
  };

  var PreLayout = function PreLayout() {
    this._childrenProportion = undefined;
    this.proportionLength = undefined;
    PreLayout$1.call(this);
    return this;
  };

  var CheckSize = function CheckSize(child, parent) {
    if (child.width < child.childrenWidth) {
      // Warning
      console.warn("Layout width error: Parent=".concat(parent.constructor.name, ", Child=").concat(child.constructor.name));
    }

    if (child.height < child.childrenHeight) {
      // Warning
      console.warn("Layout height error: Parent=".concat(parent.constructor.name, ", Child=").concat(child.constructor.name));
    }
  };

  var LayoutChildren = function LayoutChildren() {
    var children = this.sizerChildren;
    var child, childConfig, padding;
    var startX = this.innerLeft,
        startY = this.innerTop;
    var innerWidth = this.innerWidth;
    var innerHeight = this.innerHeight;
    var itemX = startX,
        itemY = startY;
    var x, y, width, height; // Align zone

    var childWidth, childHeight;

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = !this.rtl ? children[i] : children[cnt - i - 1];

      if (child.rexSizer.hidden) {
        continue;
      }

      childConfig = child.rexSizer;
      padding = childConfig.padding;
      PreLayoutChild.call(this, child); // Set size

      if (child.isRexSpace) {
        childWidth = 0;
        childHeight = 0;
      } else {
        childWidth = this.getExpandedChildWidth(child);
        childHeight = this.getExpandedChildHeight(child);
      }

      if (child.isRexSizer) {
        child.runLayout(this, childWidth, childHeight);
        CheckSize(child, this);
      } else {
        ResizeGameObject(child, childWidth, childHeight);
      }

      if (childWidth === undefined) {
        childWidth = GetDisplayWidth(child);
      }

      if (childHeight === undefined) {
        childHeight = GetDisplayHeight(child);
      } // Set position


      if (this.orientation === 0) {
        // x
        x = itemX + padding.left;

        if (childConfig.proportion === 0 || this.proportionLength === 0) {
          width = childWidth;
        } else {
          width = childConfig.proportion * this.proportionLength;
        }

        y = itemY + padding.top;
        height = innerHeight - padding.top - padding.bottom;
      } else {
        // y
        x = itemX + padding.left;
        width = innerWidth - padding.left - padding.right;
        y = itemY + padding.top;

        if (childConfig.proportion === 0 || this.proportionLength === 0) {
          height = childHeight;
        } else {
          height = childConfig.proportion * this.proportionLength;
        }
      }

      LayoutChild.call(this, child, x, y, width, height, childConfig.align);

      if (this.orientation === 0) {
        // x
        itemX += width + padding.left + padding.right + this.space.item;
      } else {
        // y
        itemY += height + padding.top + padding.bottom + this.space.item;
      }
    }
  };

  var ResolveWidth = function ResolveWidth(width) {
    var width = ResolveWidth$1.call(this, width); // Calculate proportionLength

    if (this.proportionLength === undefined && this.orientation === 0) {
      var remainder = width - this.childrenWidth;

      if (remainder > 0) {
        remainder = width - this.getChildrenWidth(false);
        this.proportionLength = remainder / this.childrenProportion;
      } else {
        this.proportionLength = 0;
      }
    }

    return width;
  };

  var ResolveHeight = function ResolveHeight(parent, height) {
    var height = ResolveHeight$1.call(this, parent, height); // Get proportionLength

    if (this.proportionLength === undefined && this.orientation === 1) {
      var remainder = height - this.childrenHeight;

      if (remainder > 0) {
        remainder = height - this.getChildrenHeight(false);
        this.proportionLength = remainder / this.childrenProportion;
      } else {
        this.proportionLength = 0;
      }
    }

    return height;
  };

  var Zone = Phaser.GameObjects.Zone;

  var Space = /*#__PURE__*/function (_Zone) {
    _inherits(Space, _Zone);

    var _super = _createSuper(Space);

    function Space(scene) {
      var _this;

      _classCallCheck(this, Space);

      _this = _super.call(this, scene, 0, 0, 1, 1); // Don't add Zone into scene

      _this.isRexSpace = true;
      return _this;
    }

    return Space;
  }(Zone);

  var IsPlainObject$1 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$4 = Phaser.Utils.Objects.GetValue;
  var ALIGN_CENTER = Phaser.Display.Align.CENTER;
  var PROPORTIONMODE = {
    min: 0,
    full: -1
  };

  var Add$1 = function Add(gameObject, proportion, align, paddingConfig, expand, childKey, index, minSize) {
    AddChild.call(this, gameObject);

    var proportionType = _typeof(proportion);

    if (proportion === null) {
      return this;
    } else if (proportionType === 'number') ; else if (proportionType === 'string') {
      proportion = PROPORTIONMODE[proportion];
    } else if (IsPlainObject$1(proportion)) {
      var config = proportion;
      proportion = GetValue$4(config, 'proportion', 0);
      align = GetValue$4(config, 'align', ALIGN_CENTER);
      paddingConfig = GetValue$4(config, 'padding', 0);
      expand = GetValue$4(config, 'expand', false);
      childKey = GetValue$4(config, 'key', undefined);
      index = GetValue$4(config, 'index', undefined);

      if (!gameObject.isRexSizer) {
        // Get minSize from config
        if (this.orientation === 0) {
          // x
          minSize = GetValue$4(config, 'minWidth', undefined);
        } else {
          // y
          minSize = GetValue$4(config, 'minHeight', undefined);
        }
      }
    }

    if (typeof align === 'string') {
      align = ALIGNMODE[align];
    }

    if (proportion === undefined) {
      proportion = 0;
    }

    if (align === undefined) {
      align = ALIGN_CENTER;
    }

    if (paddingConfig === undefined) {
      paddingConfig = 0;
    }

    if (expand === undefined) {
      expand = false;
    }

    if (!gameObject.isRexSizer && minSize === undefined) {
      // Get minSize from game object
      if (this.orientation === 0) {
        // x
        minSize = gameObject._minWidth;
      } else {
        // y
        minSize = gameObject._minHeight;
      }
    }

    var config = this.getSizerConfig(gameObject);
    config.proportion = proportion;
    config.align = align;
    config.padding = GetBoundsConfig(paddingConfig);
    config.expand = expand;

    if (index === undefined || index >= this.sizerChildren.length) {
      this.sizerChildren.push(gameObject);
    } else {
      this.sizerChildren.splice(index, 0, gameObject);
    }

    if (!gameObject.isRexSizer && proportion > 0) {
      // Expand normal game object
      if (this.orientation === 0) {
        // x
        // minSize is still undefined, uses current display width
        gameObject.minWidth = minSize === undefined ? GetDisplayWidth(gameObject) : minSize;
        gameObject.minHeight = undefined;
      } else {
        gameObject.minWidth = undefined; // minSize is still undefined, uses current display height

        gameObject.minHeight = minSize === undefined ? GetDisplayHeight(gameObject) : minSize;
      }
    }

    if (childKey !== undefined) {
      this.addChildrenMap(childKey, gameObject);
    }

    return this;
  };

  var AddChildMethods$1 = {
    add: Add$1,
    // sizer.add could be override
    addSpace: function addSpace(proportion) {
      this.insertSpace(undefined, proportion);
      return this;
    },
    insertSpace: function insertSpace(index, proportion) {
      if (proportion === undefined) {
        proportion = 1;
      }

      Add$1.call(this, new Space(this.scene), {
        proportion: proportion,
        minWidth: 0,
        minHeight: 0,
        index: index
      }); // No problem if sizer.add is override

      return this;
    },
    insert: function insert(index, gameObject, proportion, align, paddingConfig, expand, childKey) {
      Add$1.call(this, gameObject, proportion, align, paddingConfig, expand, childKey, index); // No problem if sizer.add is override

      return this;
    }
  };

  var RemoveItem$2 = Phaser.Utils.Array.Remove;
  var ContainerRemove = ContainerLite.prototype.remove;

  var RemoveChild = function RemoveChild(gameObject, destroyChild) {
    if (this.isBackground(gameObject)) {
      RemoveItem$2(this.backgroundChildren, gameObject);
    }

    ContainerRemove.call(this, gameObject, destroyChild);

    if (!destroyChild && this.sizerEventsEnable) {
      gameObject.emit('sizer.remove', gameObject, this);
      this.emit('remove', gameObject, this);
    }

    return this;
  };

  var ContainerClear = ContainerLite.prototype.clear;

  var ClearChildren = function ClearChildren(destroyChild) {
    if (this.backgroundChildren) {
      this.backgroundChildren.length = 0;
    }

    var fireRemoveEvent = !destroyChild && this.sizerEventsEnable;
    var children;

    if (fireRemoveEvent) {
      children = this.getChildren([]);
    }

    ContainerClear.call(this, destroyChild);

    if (fireRemoveEvent) {
      var gameObject;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        gameObject = children[i];
        gameObject.emit('sizer.remove', gameObject, this);
        this.emit('remove', gameObject, this);
      }
    }

    return this;
  };

  var RemoveItem$1 = Phaser.Utils.Array.Remove;
  var RemoveChildMethods$1 = {
    remove: function remove(gameObject, destroyChild) {
      if (this.getParentSizer(gameObject) !== this) {
        return this;
      }

      RemoveItem$1(this.sizerChildren, gameObject);
      RemoveChild.call(this, gameObject, destroyChild);
      return this;
    },
    removeAll: function removeAll(destroyChild) {
      for (var i = this.sizerChildren.length - 1; i >= 0; i--) {
        this.remove(this.sizerChildren[i], destroyChild);
      }

      return this;
    },
    clear: function clear(destroyChild) {
      this.sizerChildren.length = 0;
      ClearChildren.call(this, destroyChild);
      return this;
    }
  };

  var methods$1 = {
    getChildrenWidth: GetChildrenWidth,
    getChildrenHeight: GetChildrenHeight,
    getExpandedChildWidth: GetExpandedChildWidth,
    getExpandedChildHeight: GetExpandedChildHeight,
    getChildrenSizers: GetChildrenSizers,
    preLayout: PreLayout,
    layoutChildren: LayoutChildren,
    resolveWidth: ResolveWidth,
    resolveHeight: ResolveHeight
  };
  Object.assign(methods$1, AddChildMethods$1, RemoveChildMethods$1);

  var GetChildrenProportion = function GetChildrenProportion() {
    var result = 0;
    var children = this.sizerChildren;
    var child, proportion;

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];

      if (child.rexSizer.hidden) {
        continue;
      }

      proportion = child.rexSizer.proportion;

      if (proportion > 0) {
        result += proportion;
      }
    }

    return result;
  };

  var OrientationMode = {
    x: 0,
    h: 0,
    horizontal: 0,
    'left-to-right': 0,
    y: 1,
    v: 1,
    vertical: 1,
    'top-to-bottom': 1
  };

  var GetOrientationMode = function GetOrientationMode(orientation) {
    if (typeof orientation === 'string') {
      orientation = OrientationMode[orientation];
    }

    return orientation;
  };

  var IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$3 = Phaser.Utils.Objects.GetValue;

  var Sizer = /*#__PURE__*/function (_BaseSizer) {
    _inherits(Sizer, _BaseSizer);

    var _super = _createSuper(Sizer);

    function Sizer(scene, x, y, minWidth, minHeight, orientation, config) {
      var _this;

      _classCallCheck(this, Sizer);

      if (IsPlainObject(x)) {
        config = x;
        x = GetValue$3(config, 'x', 0);
        y = GetValue$3(config, 'y', 0);
        minWidth = GetValue$3(config, 'width', undefined);
        minHeight = GetValue$3(config, 'height', undefined);
        orientation = GetValue$3(config, 'orientation', 0);
      } else if (IsPlainObject(minWidth)) {
        config = minWidth;
        minWidth = GetValue$3(config, 'width', undefined);
        minHeight = GetValue$3(config, 'height', undefined);
        orientation = GetValue$3(config, 'orientation', 0);
      } else if (IsPlainObject(orientation)) {
        config = orientation;
        orientation = GetValue$3(config, 'orientation', 0);
      }

      if (orientation === undefined) {
        orientation = 0;
      }

      _this = _super.call(this, scene, x, y, minWidth, minHeight, config);
      _this.type = 'rexSizer';
      _this.sizerChildren = [];

      _this.setOrientation(orientation);

      _this.setItemSpacing(GetValue$3(config, 'space.item', 0));

      _this.setRTL(GetValue$3(config, 'rtl', false));

      _this.addChildrenMap('items', _this.sizerChildren);

      return _this;
    }

    _createClass(Sizer, [{
      key: "setOrientation",
      value: function setOrientation(orientation) {
        this.orientation = GetOrientationMode(orientation);
        return this;
      }
    }, {
      key: "setItemSpacing",
      value: function setItemSpacing(space) {
        this.space.item = space;
        return this;
      }
    }, {
      key: "setRTL",
      value: function setRTL(enable) {
        if (enable === undefined) {
          enable = true;
        }

        this.rtl = enable;
        return this;
      }
    }, {
      key: "childrenProportion",
      get: function get() {
        if (this._childrenProportion === undefined) {
          this._childrenProportion = GetChildrenProportion.call(this);
        }

        return this._childrenProportion;
      }
    }]);

    return Sizer;
  }(Base);

  Object.assign(Sizer.prototype, methods$1);

  var SizerAdd = Sizer.prototype.add;
  var SizerAddSpace = Sizer.prototype.addSpace;

  var Add = function Add(gameObject) {
    var isNormalGameObject = !gameObject.isRexSpace;
    var proportion = !isNormalGameObject || this.buttonsExpand ? 1 : 0;

    if (this.sizerChildren.length === 0) {
      // First element
      if (isNormalGameObject) {
        // Add space at head
        var hasHeadSpace = !this.buttonsExpand && (this.buttonsAlign === 'right' || this.buttonsAlign === 'center' || this.buttonsAlign === 'bottom');

        if (hasHeadSpace) {
          SizerAddSpace.call(this);
        }

        SizerAdd.call(this, gameObject, {
          proportion: proportion,
          expand: true
        }); // Add space at tail

        var hasTailSpace = !this.buttonsExpand && this.buttonsAlign === 'center';

        if (hasTailSpace) {
          SizerAddSpace.call(this);
        }

        this.hasTailSpace = hasTailSpace;
      } else {
        // A space
        SizerAdd.call(this, gameObject, {
          proportion: proportion,
          expand: true
        });
        this.hasTailSpace = false;
      }
    } else {
      // Others
      if (this.hasTailSpace) {
        var lastIndex = this.sizerChildren.length - 1;
        SizerAdd.call(this, gameObject, {
          index: lastIndex,
          proportion: proportion,
          expand: true
        });
      } else {
        SizerAdd.call(this, gameObject, {
          proportion: proportion,
          expand: true
        });
      }
    } // Space or other game object as button


    if (isNormalGameObject) {
      this.buttonGroup.add(gameObject);
    }

    return this;
  };

  var AddChildMethods = {
    addButton: function addButton(gameObject) {
      if (IsArray(gameObject)) {
        var gameObjects = gameObject;

        for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
          Add.call(this, gameObjects[i]);
        }
      } else {
        Add.call(this, gameObject);
      }

      return this;
    },
    addButtons: function addButtons(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        Add.call(this, gameObjects[i]);
      }

      return this;
    }
  };

  var RemoveItem = Phaser.Utils.Array.Remove;
  var SizerRmove = Sizer.prototype.remove;
  var SizerClear = Sizer.prototype.clear;

  var Remove = function Remove(gameObject, destroyChild) {
    if (this.getParentSizer(gameObject) !== this) {
      return this;
    }

    var buttons = this.buttonGroup.buttons;
    RemoveItem(buttons, gameObject);
    SizerRmove.call(this, gameObject, destroyChild);
    return this;
  };

  var RemoveChildMethods = {
    remove: function remove(gameObject, destroyChild) {
      // Remove gameObject no matter it is a button or not
      if (IsArray(gameObject)) {
        var gameObjects = gameObject;

        for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
          Remove.call(this, gameObjects[i], destroyChild);
        }
      } else {
        Remove.call(this, gameObject, destroyChild);
      }

      return this;
    },
    clear: function clear(destroyChild) {
      var buttons = this.buttonGroup.buttons;
      buttons.length = 0;
      SizerClear.call(this, destroyChild);
      return this;
    },
    removeButton: function removeButton(gameObject, destroyChild) {
      var gameObject = this.getButton(gameObject); // Don't remove this gameObject, it is not a button

      if (!gameObject) {
        return this;
      }

      this.remove(gameObject, destroyChild);
      return this;
    },
    clearButtons: function clearButtons(destroyChild) {
      var buttons = this.buttonGroup.buttons;

      for (var i = buttons.length - 1; i >= 0; i--) {
        Remove.call(this, buttons[i], destroyChild);
      }

      return this;
    }
  };

  var AddMethods = {
    add: function add(gameObject) {
      this.buttons.push(gameObject); //Default: Fire 'click' event when touch released after pressed.

      gameObject._buttonBehavior = new Button(gameObject, this.clickConfig);

      gameObject._buttonBehavior.on('click', function (buttonBehavior, gameObject, pointer, event) {
        this.fireEvent('button.click', gameObject, pointer, event);
      }, this).on('enable', function (buttonBehavior, gameObject) {
        this.fireEvent('button.enable', gameObject);
      }, this).on('disable', function (buttonBehavior, gameObject) {
        this.fireEvent('button.disable', gameObject);
      }, this);

      gameObject.on('pointerover', function (pointer, localX, localY, event) {
        this.fireEvent('button.over', gameObject, pointer, event);
      }, this).on('pointerout', function (pointer, event) {
        this.fireEvent('button.out', gameObject, pointer, event);
      }, this);
      return this;
    },
    addMultiple: function addMultiple(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.add(gameObject[i]);
      }

      return this;
    }
  };

  var FireEvent = function FireEvent(eventName, button, pointer, event) {
    var index;

    if (typeof button === 'number') {
      index = button;
      button = this.buttons[index];

      if (!button) {
        return;
      }
    } else {
      index = this.buttons.indexOf(button);

      if (index === -1) {
        return;
      }
    } // Buttons is a child. Fire internal events.


    if (this.eventEmitter !== this.parent) {
      this.parent.emit(eventName, button, index, pointer, event);
    }

    if (this.groupName !== undefined) {
      this.eventEmitter.emit(eventName, button, this.groupName, index, pointer, event);
    } else {
      this.eventEmitter.emit(eventName, button, index, pointer, event);
    }
  };

  var GetValue$2 = Phaser.Utils.Objects.GetValue;

  var InitData = function InitData(config, initialValue) {
    if (initialValue === undefined) {
      initialValue = false;
    }

    var dataManager = GetValue$2(config, 'dataManager', undefined);
    var setValueCallback = GetValue$2(config, 'setValueCallback', undefined);
    var setValueCallbackScope = GetValue$2(config, 'setValueCallbackScope', undefined);

    if (dataManager === undefined) {
      var parent = this.parent;
      parent.setDataEnabled();
      dataManager = parent.data;
    }

    this.buttons.forEach(function (button) {
      var key = button.name;

      if (setValueCallback) {
        dataManager.events.on("changedata-".concat(key), function (parent, value, previousValue) {
          if (setValueCallbackScope) {
            setValueCallback.call(setValueCallbackScope, button, value, previousValue);
          } else {
            setValueCallback(button, value, previousValue);
          }
        });
      }

      dataManager.set(key, undefined);
      dataManager.set(key, initialValue); // Trigger data event 'changedata'
    });
    this.dataManager = dataManager;
  };

  var SetTypeMethods = {
    setType: function setType(config) {
      var type = GetValue$2(config, 'type', undefined);

      switch (type) {
        case 'radio':
          this.setRadioType(config);
          break;

        case 'checkboxes':
          this.setCheckboxesType(config);
          break;
      }

      return this;
    },
    setRadioType: function setRadioType(config) {
      InitData.call(this, config);
      var radioValue = undefined;
      var parent = this.parent,
          buttons = this.buttons,
          dataManager = this.dataManager;
      Object.defineProperty(parent, 'value', {
        get: function get() {
          return radioValue;
        },
        set: function set(newValue) {
          if (newValue === radioValue) {
            return;
          }

          radioValue = newValue; // Update state of button -> Fire `changedata-btnName` event -> setValueCallback                

          buttons.forEach(function (button) {
            var key = button.name;
            var state = dataManager.get(key);

            if (key === newValue) {
              if (!state) {
                dataManager.set(key, true);
              }
            } else {
              if (state) {
                dataManager.set(key, false);
              }
            }
          });
        },
        enumerable: true,
        configurable: true
      });
      parent.on('button.click', function (button) {
        parent.value = button.name;
      });
      return this;
    },
    setCheckboxesType: function setCheckboxesType(config) {
      InitData.call(this, config);
      var parent = this.parent,
          dataManager = this.dataManager;
      parent.on('button.click', function (button) {
        dataManager.toggle(button.name);
      });
      return this;
    }
  };

  var GetGameObjectByName = function GetGameObjectByName(children, name) {
    if (!children) {
      return null;
    } else if (IsArray(children)) {
      var child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = TestName(children[i], name);

        if (child) {
          return child;
        }
      }
    } else {
      // Is plain object
      var child;

      for (var key in children) {
        child = TestName(children[key], name);

        if (child) {
          return child;
        }
      }
    }
  };

  var TestName = function TestName(gameObject, name) {
    if (!gameObject) {
      return null;
    } else if (gameObject.hasOwnProperty('name')) {
      return gameObject.name === name ? gameObject : null;
    } else {
      // Array, or plain object
      return GetElementByName(gameObject, name);
    }
  };

  var ButtonMethods$1 = {
    getButton: function getButton(index) {
      // buttonGroup and button-sizer have *buttons* member both
      var buttons = this.buttons,
          button;

      var indexType = _typeof(index);

      switch (indexType) {
        case 'number':
          button = buttons[index];
          break;

        case 'string':
          button = GetGameObjectByName(buttons, index);
          break;

        default:
          button = index;

          if (buttons.indexOf(button) === -1) {
            button = undefined;
          }

          break;
      }

      return button;
    },
    setButtonEnable: function setButtonEnable(index, enabled) {
      // buttonGroup and button-sizer have *buttons* member both
      var buttons = this.buttons;

      if (index === undefined || typeof index === 'boolean') {
        enabled = index;

        for (var i = 0, cnt = buttons.length; i < cnt; i++) {
          buttons[i]._buttonBehavior.setEnable(enabled);
        }
      } else {
        this.getButton(index)._buttonBehavior.setEnable(enabled);
      }

      return this;
    },
    toggleButtonEnable: function toggleButtonEnable(index) {
      // buttonGroup and button-sizer have *buttons* member both
      var buttons = this.buttons;

      if (index === undefined || typeof index === 'boolean') {
        for (var i = 0, cnt = buttons.length; i < cnt; i++) {
          buttons[i]._buttonBehavior.toggleEnable();
        }
      } else {
        this.getButton(index)._buttonBehavior.toggleEnable();
      }

      return this;
    },
    getButtonEnable: function getButtonEnable(index) {
      if (index === undefined) {
        index = 0;
      }

      return this.getButton(index)._buttonBehavior.enable;
    },
    emitButtonClick: function emitButtonClick(index) {
      // index or button game object
      // this: buttonGroup or button-sizer
      var buttonGroup = this.buttonGroup ? this.buttonGroup : this;
      buttonGroup.fireEvent('button.click', index);
      return this;
    },
    showButton: function showButton(index) {
      Show(this.getButton(index));
      return this;
    },
    hideButton: function hideButton(index) {
      Hide(this.getButton(index));
      return this;
    },
    isButtonShown: function isButtonShown(index) {
      IsShown(this.getButton(index));
      return this;
    },
    forEachButtton: function forEachButtton(callback, scope) {
      // buttonGroup and button-sizer have *buttons* member both
      var buttons = this.buttons;

      for (var i = 0, cnt = buttons.length; i < cnt; i++) {
        if (scope) {
          callback.call(scope, buttons[i], i, buttons);
        } else {
          callback(buttons[i], i, buttons);
        }
      }

      return this;
    }
  };

  var ButtonGroup = /*#__PURE__*/function () {
    function ButtonGroup(config) {
      _classCallCheck(this, ButtonGroup);

      this.parent = config.parent;
      this.eventEmitter = config.eventEmitter;
      this.groupName = config.groupName;
      this.clickConfig = config.clickConfig;
      this.buttons = [];
    }

    _createClass(ButtonGroup, [{
      key: "destroy",
      value: function destroy() {
        this.parent = undefined;
        this.eventEmitter = undefined;
        this.clickConfig = undefined;
        this.buttons = undefined; // GameObjects will be destroyed outside
      }
    }]);

    return ButtonGroup;
  }();

  var methods = {
    fireEvent: FireEvent
  };
  Object.assign(ButtonGroup.prototype, AddMethods, SetTypeMethods, ButtonMethods$1, methods);

  var GetValue$1 = Phaser.Utils.Objects.GetValue;

  var Buttons = /*#__PURE__*/function (_Sizer) {
    _inherits(Buttons, _Sizer);

    var _super = _createSuper(Buttons);

    function Buttons(scene, config) {
      var _this;

      _classCallCheck(this, Buttons);

      if (config === undefined) {
        config = {};
      }

      var buttonSpace = config.space;

      if (typeof buttonSpace === 'number') {
        config.space = {
          item: buttonSpace
        };
      } // Create


      _this = _super.call(this, scene, config);
      _this.type = 'rexButtons';
      _this.buttonGroup = new ButtonGroup({
        parent: _assertThisInitialized(_this),
        eventEmitter: GetValue$1(config, 'eventEmitter', _assertThisInitialized(_this)),
        groupName: GetValue$1(config, 'groupName', undefined),
        clickConfig: GetValue$1(config, 'click', undefined)
      }); // Add elements

      var background = GetValue$1(config, 'background', undefined);
      var buttons = GetValue$1(config, 'buttons', undefined); // Buttons properties

      _this.buttonsExpand = GetValue$1(config, 'expand', false);
      _this.buttonsAlign = GetValue$1(config, 'align', undefined); // undefined/left/top: no space                

      if (background) {
        _this.addBackground(background);
      }

      if (buttons) {
        _this.addButtons(buttons);
      }

      _this.buttonGroup.setType(config);

      _this.addChildrenMap('background', background);

      _this.addChildrenMap('buttons', _this.buttonGroup.buttons);

      return _this;
    }

    _createClass(Buttons, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene) {
          return;
        }

        _get(_getPrototypeOf(Buttons.prototype), "destroy", this).call(this, fromScene);

        this.buttonGroup.destroy();
        this.buttonGroup = undefined;
      }
    }, {
      key: "buttons",
      get: function get() {
        return this.buttonGroup.buttons;
      }
    }, {
      key: "groupName",
      get: function get() {
        return this.buttonGroup.groupName;
      },
      set: function set(value) {
        this.buttonGroup.groupName = value;
      }
    }, {
      key: "eventEmitter",
      get: function get() {
        return this.buttonGroup.eventEmitter;
      }
    }]);

    return Buttons;
  }(Sizer);

  Object.assign(Buttons.prototype, AddChildMethods, RemoveChildMethods, ButtonMethods$1);

  var ButtonMethods = {
    getChoice: function getChoice(index) {
      return this.childrenMap.choicesSizer.getButton(index);
    },
    getAction: function getAction(index) {
      return this.childrenMap.actionsSizer.getButton(index);
    },
    getToolbar: function getToolbar(index) {
      return this.childrenMap.toolbarSizer.getButton(index);
    },
    getLeftToolbar: function getLeftToolbar(index) {
      return this.childrenMap.leftToolbarSizer.getButton(index);
    },
    setChoiceEnable: function setChoiceEnable(index, enabled) {
      this.childrenMap.choicesSizer.setButtonEnable(index, enabled);
      return this;
    },
    setActionEnable: function setActionEnable(index, enabled) {
      this.childrenMap.actionsSizer.setButtonEnable(index, enabled);
      return this;
    },
    setToolbarEnable: function setToolbarEnable(index, enabled) {
      this.childrenMap.toolbarSizer.setButtonEnable(index, enabled);
      return this;
    },
    setLeftToolbarEnable: function setLeftToolbarEnable(index, enabled) {
      this.childrenMap.leftToolbarSizer.setButtonEnable(index, enabled);
      return this;
    },
    toggleChoiceEnable: function toggleChoiceEnable(index) {
      this.childrenMap.choicesSizer.toggleButtonEnable(index);
      return this;
    },
    toggleActionEnable: function toggleActionEnable(index) {
      this.childrenMap.actionsSizer.toggleButtonEnable(index);
      return this;
    },
    toggleToolbarEnable: function toggleToolbarEnable(index) {
      this.childrenMap.toolbarSizer.toggleButtonEnable(index);
      return this;
    },
    toggleLeftToolbarEnable: function toggleLeftToolbarEnable(index) {
      this.childrenMap.leftToolbarSizer.toggleButtonEnable(index);
      return this;
    },
    getChoiceEnable: function getChoiceEnable(index) {
      return this.childrenMap.choicesSizer.getButtonEnable(index);
    },
    getActionEnable: function getActionEnable(index) {
      return this.childrenMap.actionsSizer.getButtonEnable(index);
    },
    getToolbarEnable: function getToolbarEnable(index) {
      return this.childrenMap.toolbarSizer.getButtonEnable(index);
    },
    getLeftToolbarEnable: function getLeftToolbarEnable(index) {
      return this.childrenMap.leftToolbarSizer.getButtonEnable(index);
    },
    emitChoiceClick: function emitChoiceClick(index) {
      this.childrenMap.choicesSizer.emitButtonClick(index);
      return this;
    },
    emitActionClick: function emitActionClick(index) {
      this.childrenMap.actionsSizer.emitButtonClick(index);
      return this;
    },
    emitToolbarClick: function emitToolbarClick(index) {
      this.childrenMap.toolbarSizer.emitButtonClick(index);
      return this;
    },
    emitLeftToolbarClick: function emitLeftToolbarClick(index) {
      this.childrenMap.leftToolbarSizer.emitButtonClick(index);
      return this;
    },
    showChoice: function showChoice(index) {
      this.childrenMap.choicesSizer.showButton(index);
      return this;
    },
    showAction: function showAction(index) {
      this.childrenMap.actionsSizer.showButton(index);
      return this;
    },
    showToolbar: function showToolbar(index) {
      this.childrenMap.toolbarSizer.showButton(index);
      return this;
    },
    showLeftToolbar: function showLeftToolbar(index) {
      this.childrenMap.leftToolbarSizer.showButton(index);
      return this;
    },
    hideChoice: function hideChoice(index) {
      this.childrenMap.choicesSizer.hideButton(index);
      return this;
    },
    hideAction: function hideAction(index) {
      this.childrenMap.actionsSizer.hideButton(index);
      return this;
    },
    hideToolbar: function hideToolbar(index) {
      this.childrenMap.toolbarSizer.hideButton(index);
      return this;
    },
    hideLeftToolbar: function hideLeftToolbar(index) {
      this.childrenMap.leftToolbarSizer.hideButton(index);
      return this;
    },
    addChoice: function addChoice(gameObject) {
      this.childrenMap.choicesSizer.addButton(gameObject);
      return this;
    },
    addAction: function addAction(gameObject) {
      this.childrenMap.actionsSizer.addButton(gameObject);
      return this;
    },
    addToolbar: function addToolbar(gameObject) {
      this.childrenMap.toolbarSizer.addButton(gameObject);
      return this;
    },
    addLeftToolbar: function addLeftToolbar(gameObject) {
      this.childrenMap.leftToolbarSizer.addButton(gameObject);
      return this;
    },
    removeChoice: function removeChoice(index, destroyChild) {
      this.childrenMap.choicesSizer.removeButton(index, destroyChild);
      return this;
    },
    removeAction: function removeAction(index, destroyChild) {
      this.childrenMap.actionsSizer.removeButton(index, destroyChild);
      return this;
    },
    removeToolbar: function removeToolbar(index, destroyChild) {
      this.childrenMap.toolbarSizer.removeButton(index, destroyChild);
      return this;
    },
    removeLeftToolbar: function removeLeftToolbar(index, destroyChild) {
      this.childrenMap.leftToolbarSizer.removeButton(index, destroyChild);
      return this;
    },
    clearChoices: function clearChoices(destroyChild) {
      this.childrenMap.choicesSizer.clearButtons(destroyChild);
      return this;
    },
    clearActions: function clearActions(destroyChild) {
      this.childrenMap.actionsSizer.clearButtons(destroyChild);
      return this;
    },
    clearToolbar: function clearToolbar(destroyChild) {
      this.childrenMap.toolbarSizer.clearButtons(destroyChild);
      return this;
    },
    clearLeftToolbar: function clearLeftToolbar(destroyChild) {
      this.childrenMap.leftToolbarSizer.clearButtons(destroyChild);
      return this;
    },
    forEachChoice: function forEachChoice(callback, scope) {
      this.childrenMap.choicesSizer.forEachButtton(callback, scope);
      return this;
    },
    forEachAction: function forEachAction(callback, scope) {
      this.childrenMap.actionsSizer.forEachButtton(callback, scope);
      return this;
    },
    forEachToolbar: function forEachToolbar(callback, scope) {
      this.childrenMap.toolbarSizer.forEachButtton(callback, scope);
      return this;
    },
    forEachLeftToolbar: function forEachLeftToolbar(callback, scope) {
      this.childrenMap.leftToolbarSizer.forEachButtton(callback, scope);
      return this;
    }
  };

  var GetValue = Phaser.Utils.Objects.GetValue;

  var Dialog = /*#__PURE__*/function (_Sizer) {
    _inherits(Dialog, _Sizer);

    var _super = _createSuper(Dialog);

    function Dialog(scene, config) {
      var _this;

      _classCallCheck(this, Dialog);

      if (config === undefined) {
        config = {};
      } // Create sizer        


      config.orientation = 1; // Top to bottom

      _this = _super.call(this, scene, config);
      _this.type = 'rexDialog';
      _this.eventEmitter = GetValue(config, 'eventEmitter', _assertThisInitialized(_this)); // Add elements

      var background = GetValue(config, 'background', undefined);
      var title = GetValue(config, 'title', undefined);
      var toolbar = GetValue(config, 'toolbar', undefined);
      var toolbarBackground = GetValue(config, 'toolbarBackground', undefined);
      var leftToolbar = GetValue(config, 'leftToolbar', undefined);
      var leftToolbarBackground = GetValue(config, 'leftToolbarBackground', undefined);
      var content = GetValue(config, 'content', undefined);
      var description = GetValue(config, 'description', undefined);
      var choicesSizer;
      var choices = GetValue(config, 'choices', undefined);
      var choicesBackground = GetValue(config, 'choicesBackground', undefined);
      var actionsSizer;
      var actions = GetValue(config, 'actions', undefined);
      var actionsBackground = GetValue(config, 'actionsBackground', undefined);
      var clickConfig = GetValue(config, 'click', undefined);

      if (background) {
        _this.addBackground(background);
      }

      var toolbarSizer;

      if (toolbar) {
        toolbarSizer = new Buttons(scene, {
          groupName: 'toolbar',
          background: toolbarBackground,
          buttons: toolbar,
          orientation: 0,
          // Left-right
          space: {
            item: GetValue(config, 'space.toolbarItem', 0)
          },
          click: clickConfig,
          eventEmitter: _this.eventEmitter
        });
      }

      var leftToolbarSizer;

      if (leftToolbar) {
        leftToolbarSizer = new Buttons(scene, {
          groupName: 'leftToolbar',
          background: leftToolbarBackground,
          buttons: leftToolbar,
          orientation: 0,
          // Left-right
          space: {
            item: GetValue(config, 'space.leftToolbarItem', 0)
          },
          click: clickConfig,
          eventEmitter: _this.eventEmitter
        });
      } // title only


      if (title && !toolbar && !leftToolbar) {
        var align = GetValue(config, 'align.title', 'center');
        var titleSpace = GetValue(config, 'space.title', 0);
        var padding;

        if (content || description || choices || actions) {
          padding = {
            bottom: titleSpace
          };
        }

        var expand = GetValue(config, 'expand.title', true);

        _this.add(title, {
          align: align,
          padding: padding,
          expand: expand
        });
      } // toolbar only


      if (toolbar && !title && !leftToolbar) {
        var titleSpace = GetValue(config, 'space.title', 0);
        var padding;

        if (content || description || choices || actions) {
          padding = {
            bottom: titleSpace
          };
        }

        var expand = GetValue(config, 'expand.toolbar', true);

        _this.add(toolbarSizer, {
          align: 'right',
          padding: padding,
          expand: expand
        });
      } // leftToolbar only


      if (leftToolbar && !title && !toolbar) {
        var titleSpace = GetValue(config, 'space.title', 0);
        var padding;

        if (content || description || choices || actions) {
          padding = {
            bottom: titleSpace
          };
        }

        var expand = GetValue(config, 'expand.leftToolbar', true);

        _this.add(leftToolbarSizer, {
          align: 'left',
          padding: padding,
          expand: expand
        });
      } // tilte and (toolbar or leftToolbar)


      if (title && (toolbar || leftToolbar)) {
        var titleSizer = new Sizer(scene, {
          orientation: 0
        }); // Add leftToolbar

        if (leftToolbarSizer) {
          titleSizer.add(leftToolbarSizer, {
            align: 'right',
            expand: false
          });
        } // Add title


        var align = GetValue(config, 'align.title', 'left');
        var expand = GetValue(config, 'expand.title', true); // Add space if not expand

        if (!expand && (align === 'right' || align === 'center')) {
          titleSizer.addSpace();
        }

        var padding = {
          left: GetValue(config, 'space.titleLeft', 0),
          right: GetValue(config, 'space.titleRight', 0)
        };
        var proportion = expand ? 1 : 0;
        titleSizer.add(title, {
          proportion: proportion,
          align: 'center',
          padding: padding,
          expand: expand
        }); // Add space if not expand

        if (!expand && (align === 'left' || align === 'center')) {
          titleSizer.addSpace();
        } // Add toolbar


        if (toolbarSizer) {
          titleSizer.add(toolbarSizer, {
            align: 'right',
            expand: false
          });
        } // Add sizer to dialog


        var titleSpace = GetValue(config, 'space.title', 0);
        var padding;

        if (content || description || choices || actions) {
          padding = {
            bottom: titleSpace
          };
        }

        _this.add(titleSizer, {
          align: 'center',
          padding: padding,
          expand: true
        });
      }

      if (content) {
        var align = GetValue(config, 'align.content', 'center');
        var contentSpace = GetValue(config, 'space.content', 0);
        var padding = {
          left: GetValue(config, 'space.contentLeft', 0),
          right: GetValue(config, 'space.contentRight', 0),
          bottom: description || choices || actions ? contentSpace : 0
        };
        var expand = GetValue(config, 'expand.content', true);

        _this.add(content, {
          align: align,
          padding: padding,
          expand: expand
        });
      }

      if (description) {
        var align = GetValue(config, 'align.description', 'center');
        var descriptionSpace = GetValue(config, 'space.description', 0);
        var padding = {
          left: GetValue(config, 'space.descriptionLeft', 0),
          right: GetValue(config, 'space.descriptionRight', 0),
          bottom: choices || actions ? descriptionSpace : 0
        };
        var expand = GetValue(config, 'expand.description', true);

        _this.add(description, {
          align: align,
          padding: padding,
          expand: expand
        });
      }

      if (choices) {
        var align = GetValue(config, 'align.choices', 'center');
        choicesSizer = new Buttons(scene, {
          groupName: 'choices',
          background: choicesBackground,
          buttons: choices,
          orientation: 1,
          // Top-Bottom
          space: {
            item: GetValue(config, 'space.choice', 0)
          },
          click: clickConfig,
          eventEmitter: _this.eventEmitter,
          type: GetValue(config, 'choicesType', undefined),
          setValueCallback: GetValue(config, 'choicesSetValueCallback', undefined),
          setValueCallbackScope: GetValue(config, 'choicesSetValueCallbackScope', undefined)
        });
        var choicesSpace = GetValue(config, 'space.choices', 0);
        var padding = {
          left: GetValue(config, 'space.choicesLeft', 0),
          right: GetValue(config, 'space.choicesRight', 0),
          bottom: actions ? choicesSpace : 0
        };
        var expand = GetValue(config, 'expand.choices', true);

        _this.add(choicesSizer, {
          align: align,
          padding: padding,
          expand: expand
        });
      }

      if (actions) {
        actionsSizer = new Buttons(scene, {
          groupName: 'actions',
          background: actionsBackground,
          buttons: actions,
          orientation: 0,
          // Left-right
          space: {
            item: GetValue(config, 'space.action', 0)
          },
          expand: GetValue(config, 'expand.actions', false),
          align: GetValue(config, 'align.actions', 'center'),
          click: clickConfig,
          eventEmitter: _this.eventEmitter
        });
        var padding = {
          left: GetValue(config, 'space.actionsLeft', 0),
          right: GetValue(config, 'space.actionsRight', 0)
        };

        _this.add(actionsSizer, {
          align: 'center',
          padding: padding,
          expand: true
        });
      }

      _this.addChildrenMap('background', background);

      _this.addChildrenMap('title', title);

      _this.addChildrenMap('toolbar', toolbar);

      _this.addChildrenMap('leftToolbar', leftToolbar);

      _this.addChildrenMap('content', content);

      _this.addChildrenMap('description', description);

      _this.addChildrenMap('choices', choices);

      _this.addChildrenMap('actions', actions);

      _this.addChildrenMap('choicesSizer', choicesSizer);

      _this.addChildrenMap('actionsSizer', actionsSizer);

      _this.addChildrenMap('toolbarSizer', toolbarSizer);

      _this.addChildrenMap('leftToolbarSizer', leftToolbarSizer);

      return _this;
    }

    return Dialog;
  }(Sizer);

  Object.assign(Dialog.prototype, ButtonMethods);

  return Dialog;

})));
