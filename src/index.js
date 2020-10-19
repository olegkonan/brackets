module.exports = function check(str, bracketsConfig) {
    const checkedArr = str.split('');
    // functions for removing excess brackets
    const removeInternalExcessBrackets = () => {
      bracketsConfig.forEach(element => {
        this.openBracket = element[0];
        this.closeBracket = element[1];
        this.checking = Math.abs(checkedArr.indexOf(this.openBracket) - checkedArr.indexOf(this.closeBracket));
        if (this.checking % 2 === 0 && this.checking !== 0) {
          this.exitTrigger = 1;
        }
        if (checkedArr[0] === this.closeBracket) {
          this.exitTrigger = 1;
        }
        if (checkedArr[checkedArr.length - 1] === this.openBracket) {
          this.exitTrigger = 1;
        }
        /*if (checkedArr.indexOf(this.openBracket) !== -1 && checkedArr.indexOf(this.closeBracket) === -1) {
          this.exitTrigger = 1;
        }
        if (checkedArr.indexOf(this.openBracket) === -1 && checkedArr.indexOf(this.closeBracket) !== -1) {
          this.exitTrigger = 1;
        }*/
        for (let i = 0; i < checkedArr.length - 1; i++) {
          if (checkedArr[i] === this.openBracket && checkedArr[i + 1] === this.closeBracket) {
            result = checkedArr.splice(i, 2);
            i = -1;
          }
        }
      });
      if (this.exitTrigger === 1) return
      if (checkedArr.length !== 0) {
        removeInternalExcessBrackets();
      } return
    }
    const removeExternalExcessBrackets = () => {
      bracketsConfig.forEach(element => {
        this.openBracket = element[0];
        this.closeBracket = element[1];
        this.checking = Math.abs(checkedArr.indexOf(this.openBracket) - checkedArr.indexOf(this.closeBracket));
        if (this.checking % 2 === 0 && this.checking !== 0) {
          this.exitTrigger = 1;
        }
        if (checkedArr[0] === this.closeBracket) {
          this.exitTrigger = 1;
        }
        if (checkedArr[checkedArr.length - 1] === this.openBracket) {
          this.exitTrigger = 1;
        }
        for (let i = 0; i < checkedArr.length - 1; i++) {
          if (checkedArr[i] === this.openBracket && checkedArr[checkedArr.length - 1] === this.closeBracket) {
            result = checkedArr.shift(i)
            result = checkedArr.pop(checkedArr.length - 1)
            i = -1;
          }
        }
      });
      if (this.exitTrigger === 1) return
      if (checkedArr.length !== 0) {
        removeExternalExcessBrackets();
      } return
    }
    // check if the length of the string is odd
      if (str.length % 2 !== 0) {
          return false
    } else {
      removeInternalExcessBrackets();
      this.exitTrigger = 0;
      removeExternalExcessBrackets();
      this.exitTrigger = 0;
      removeInternalExcessBrackets();
      this.exitTrigger = 0;
      removeExternalExcessBrackets();
    }
    if (checkedArr.join('') === '') {
      return true
    } else {
      return false
    }
}
