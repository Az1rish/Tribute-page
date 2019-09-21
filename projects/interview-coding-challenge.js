function mergeDataStreams(set1, set2) {
    for(let i=0; i<set1.length; i++) {
        for(let x=0; x<set2.length; x++){
            if (set1[i].id === set2[x].id) {
                set1[i].occupation = set2[x].occupation;
                set1[i].address = set2[x].address;
            }
        }
    }
    return set1;
}

Object.keys(set2[x]).forEach(key=>{
    set1[i][key] = set2[x][key];
  });