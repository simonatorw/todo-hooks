import data from './data.json';

export const add = (val, toDosValue, setToDoState, setValState, e) => {
  if (e.keyCode === 13 && val) {
    setToDoState([ ...toDosValue, val]);
    setValState('');
  }
}

export const updateField = (setValState, e) => setValState(e.target.value);

export const remove = (i, toDosValue, setToDoState) => {
  const list = toDosValue.slice();

  list.splice(i, 1);
  setToDoState(list);
}

export const async = {
  getApi: function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 800);
    });
  }
};