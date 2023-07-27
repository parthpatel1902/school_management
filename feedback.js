
function magic() {

    var x = document.getElementById('i1').value;
    localStorage.setItem('tname', x);
    var y = document.getElementById('i2').value;
    localStorage.setItem('sname', y);
    var z = document.getElementById('i3').value;
    localStorage.setItem('cname', z);
    var a = document.getElementById('i4').value;
    localStorage.setItem('cnumber', a);

    if (x == '') {
      swal('Note!', 'Teacher Name is Require', 'warning');
    } else if (y == '') {
      swal('Note!', 'Subject Name is Require', 'warning');
    } else if (z == '') {
      swal('Note!', 'Course Name is Require', 'warning');
    } else if (a == '') {
      swal('Note!', 'Course Number is Require', 'warning');
    } else {
      window.location.href = 'record.html';
    }

    var r1 = document.querySelector('input[name="redin1"]:checked').value;
    localStorage.setItem('choose1', r1);
    var r2 = document.querySelector('input[name="redin2"]:checked').value;
    localStorage.setItem('choose2', r2);
    var r3 = document.querySelector('input[name="redin3"]:checked').value;
    localStorage.setItem('choose3', r3);
    var r4 = document.querySelector('input[name="redin4"]:checked').value;
    localStorage.setItem('choose4', r4);
    var r5 = document.querySelector('input[name="redin5"]:checked').value;
    localStorage.setItem('choose5', r5);
    var r6 = document.querySelector('input[name="redin6"]:checked').value;
    localStorage.setItem('choose6', r6);
    var r7 = document.querySelector('input[name="redin7"]:checked').value;
    localStorage.setItem('choose7', r7);

}