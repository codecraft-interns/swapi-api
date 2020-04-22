((window, document, undefined) => {
  let local_data = data;
  const front = document.getElementById("front-end-resources");
  const back = document.getElementById("back-end-resources");
  let lookup = {};
  let branchelement = {};
  let membercount={};
  
  local_data.forEach(element => {
    if (!(element.groupName in lookup)) {
      lookup[element.groupName] = 1;
      branchelement['left_' + element.groupName] = 0;
      branchelement['right_' + element.groupName] = 0;
      group(element.groupName, front, 'left', '+', element.groupId);
      group(element.groupName, back, 'right', '-', element.groupId);
    }
  
  });
  
  function group(name, side, sides, symbol) {
    const html = `<div class="group-layout__group " id=${sides + '_' + name}>
              
      <div class="group-layout__group-header">
          <div class="group-layout__group-name">${name}</div>
          <div class="group-layout__group-btn group_delete_${sides} group-layout__group-btn--add">${symbol}</div>
      </div> 
      ${member(name, sides, symbol)}
  </div>`;
    side.innerHTML += html;
  }
  function member(group, sides, symbol) {
    var eachmember = '';
    for (var i = 0; i < local_data.length; i++) {
      if (group == local_data[i].groupName) {
  
        const html = `<div class="group-layout__group-items" id=${sides + '_' + local_data[i].id}>
             <div class="group-layout__group-item ">
                 <div class="group-layout__group-item-name" id=${local_data[i].groupName}>${local_data[i].name}</div>
                 <div class="group-layout__group-btn group_member_delete_${sides} group-layout__group-btn--add"  id=${local_data[i].id}>${symbol}</div>
             </div>
         </div>
     `;
        eachmember += html;
      }
    }
    return eachmember;
  }
  function init() {
    for (var i in lookup) {
      for (var j = 0; j < local_data.length; j++) {
        if (i == local_data[j].groupName) {
          let rightelement = document.getElementById('right_' + local_data[j].id);
          rightelement.style.display = "none";
          let leftelement = document.getElementById('left_' + local_data[j].id);
          leftelement.style.display = "none";
        }
      }
      
      let rightgroup = document.getElementById('right_' + i);
      rightgroup.style.display = "none";
      let leftgroup = document.getElementById('left_' + i);
      leftgroup.style.display = "none";
      show(i, getid(i), 'left');
  }
   
  }
  function show(groupid, element, side) {
    var visible = document.getElementById(side + '_' + groupid);
    visible.style.display = "block";
    for (var i in element) {
      for (var j = 0; j < local_data.length; j++) {
        if (i == local_data[j].id) {
          let rightelement = document.getElementById(side + '_' + local_data[j].id);
          rightelement.style.display = "block";
          branchelement[side + '_' + groupid]++;
          if (branchelement[side + '_' + groupid] > membercount[groupid]) { branchelement[side + '_' + groupid] = membercount[groupid]; }
  
        }
      }
    }
  }
  function hide(groupid, element, side) {
    var visible = document.getElementById(side + '_' + groupid);
    visible.style.display = "none";
    for (var i in element) {
      for (var j = 0; j < local_data.length; j++) {
        if (i == local_data[j].id) {
          let rightelement = document.getElementById(side + '_' + local_data[j].id);
          rightelement.style.display = "none";
          branchelement[side + '_' + groupid]--;
          if (branchelement[side + '_' + groupid] < 0) { branchelement[side + '_' + groupid] = 0; }
        }
      }
    }
  }
  function hide1(id, side, count, groupid) {
    if (count > 1) {
      let rightelement = document.getElementById(side + '_' + id);
      rightelement.style.display = "none";
      branchelement[side + '_' + groupid]--;
      if (branchelement[side + '_' + groupid] < 0) { branchelement[side + '_' + groupid] = 0; }
    }
    else {
      var visible = document.getElementById(side + '_' + groupid);
      visible.style.display = "none";
      let rightelement = document.getElementById(side + '_' + id);
      rightelement.style.display = "none";
      branchelement[side + '_' + groupid] = 0;
    }
  }
  front.addEventListener('click', e => {
    if (e.target.classList.contains('group_delete_left')) {
      show(e.target.previousElementSibling.innerHTML, getid(e.target.previousElementSibling.innerHTML), 'right');
      hide(e.target.previousElementSibling.innerHTML, getid(e.target.previousElementSibling.innerHTML), 'left');
  
    }
  });
  back.addEventListener('click', e => {
    if (e.target.classList.contains('group_delete_right')) {
      show(e.target.previousElementSibling.innerHTML, getid(e.target.previousElementSibling.innerHTML), 'left');
      hide(e.target.previousElementSibling.innerHTML, getid(e.target.previousElementSibling.innerHTML), 'right');
  
  
    }
  });
  front.addEventListener('click', e => {
    if (e.target.classList.contains('group_member_delete_left')) {
      let idlist = {}
      idlist[e.target.id] = 1;
      show(e.target.previousElementSibling.id, idlist, 'right');
      hide1(e.target.id, 'left', branchelement['left_' + e.target.previousElementSibling.id], e.target.previousElementSibling.id);
  
    }
  });
  back.addEventListener('click', e => {
    if (e.target.classList.contains('group_member_delete_right')) {
      let idlist = {}
      idlist[e.target.id] = 1;
      show(e.target.previousElementSibling.id, idlist, 'left');
      hide1(e.target.id, 'right', branchelement['right_' + e.target.previousElementSibling.id], e.target.previousElementSibling.id);
  
    }
  });
  
  function getid(groupname) {
    let groupids = {};
    for (var i = 0; i < local_data.length; i++) {
      if (groupname == local_data[i].groupName) {
        groupids[local_data[i].id] = 1;
      }
    }
    return groupids;
  }
  
  function countmember(){
    data.forEach(element=>{
      if(!(element.groupName in membercount)){
        membercount[element.groupName]=0;
            data.forEach(items=>{
                if(element.groupName==items.groupName){
                  membercount[items.groupName]++;
                }
            });
      }
  });
  }
  
  init();
  countmember();
  })(window, document, undefined);
  