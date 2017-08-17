var tid;

function toConsole (n) {
    console.log(n);    
    tid = setTimeout(toConsole, 1000, n+1);
    if (n > 5) {
      clearTimeout(tid);
  }
}

toConsole(0);

246-19-31