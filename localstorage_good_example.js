if(!localStorage.getItem('task')) {
    populateStorage();
  } else {
    setStyles();
  }