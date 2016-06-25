/**
 * Created by condor on 03/04/15.
 */

function listTasks(tasks) {
    var list = document.getElementById('listOfTasks').getElementsByTagName('ul')[0];
    var listHtml = '';

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        //var checked = task.done ? ' checked=""' : '';
        var taskHtml =
            '<li>' +
                //'<input type="checkbox"' + checked + ' value="' + task.id + '" onclick=markDone("' + task.id + '")>' +
            '<input type="checkbox" value="' + task.id + '" onclick=markDone("' + task.id + '")>' +
            task.name +
            '</li>';
        listHtml += taskHtml;
    }
    list.innerHTML = listHtml;
}


function markDone(id) {
    $.ajax({
        url: 'items?action=done&id='+id
    }).done(function (response) {
        loadTasks();
    });
}

function loadTasks() {
    $.ajax({
        url: 'items?action=list'
    }).done(function (response) {
        listTasks(response.tasks);
    });
}

function addTask() {
    var toDoText = document.getElementById('todoid').value;
    $.ajax({
        url: 'items?action=add&value='+toDoText
    }).done(function (response) {
        location.href = "index.html";
    });
}