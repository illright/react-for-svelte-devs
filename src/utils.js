export const bind = {
  value(value, setValue, options = {}) {
    const { onChange } = options;
    return {
      value,
      onChange: e => {
        if (e.target.tagName.toLowerCase() === 'select') {
          if (e.target.multiple) {
            setValue(
              [...e.target.options]
                .filter(option => option.selected)
                .map(option => option.value)
            );
          } else {

          }
        } else if (e.target.type === 'number') {
          setValue(parseInt(e.target.value));
        } else {
          setValue(e.target.value);
        }
        if (onChange) onChange(e);
      }
    };
  },
  checked(value, setValue, options = {}) {
    const { onChange } = options;
    return {
      value,
      onChange: e => {
        setValue(e.target.checked);
        if (onChange) onChange(e);
      }
    };
  },
  group({ value: radioValue }, value, setValue, options = {}) {
    const { onChange } = options;
    return {
      checked: value === radioValue,
      onChange: e => {
        if (e.target.checked) {
          setValue(radioValue);
        }
        if (onChange) onChange(e);
      }
    };
  },
  groupMany({ value: checkboxValue }, value, setValue, options = {}) {
    const { onChange } = options;
    return {
      checked: value.includes(checkboxValue),
      onChange: e => {
        if (e.target.checked) {
          setValue([...value, checkboxValue]);
        } else {
          setValue(value.filter(x => x !== checkboxValue));
        }
        if (onChange) onChange(e);
      }
    }
  },
  innerHTML(value, setValue, options = {}) {
    const { onInput } = options;
    return {
      dangerouslySetInnerHTML: { __html: value },
      onInput: e => {
        setValue(e.target.innerHTML);
        if (onInput) onInput(e);
      },
    };
  },
  currentTime(value, setValue, options = {}) {
    const { onLoadStart, onTimeUpdate } = options;
    let videoAnimationFrame = null;

    const timeUpdateHandler = (e) => {
      cancelAnimationFrame(videoAnimationFrame);

      if (!e.target.paused) {
        videoAnimationFrame = requestAnimationFrame(() => timeUpdateHandler(e));
      }

      setValue(e.target.currentTime);
      onTimeUpdate(e);
    }

    return {
      onLoadStart: e => {
        e.target.currentTime = value;
        if (onLoadStart) onLoadStart(e);
      },
      onTimeUpdate: timeUpdateHandler,
    }
  },
  paused(value, setValue, options = {}) {

  },
};

export const bindRO = {
  duration(setValue, options = {}) {
    const { onDurationChange } = options;
    return {
      onDurationChange: e => {
        setValue(e.target.duration);
        if (onDurationChange) onDurationChange(e);
      },
    };
  },
}

export function setField(fieldName, value, onThis) {
  return (object) => {
    const copy = {...object};
    if (object === onThis) {
      copy[fieldName] = value;
    }
    return copy;
  }
}

export const preventDefault = (handler) => {
  return (e, ...rest) => {
    e.preventDefault();
    handler(e, ...rest);
  }
};

export const once = (handler) => {
  let called = false;
  return (...args) => {
    if (!called) {
      handler(...args);
      called = true;
    }
  }
}

export function classes(classNames) {
  return classNames.filter(Boolean).join(' ');
}
