export function searchFunction() {
    console.log('running')
    window.alert('run');
    const currentUrl = window.location.href;
    const afterWith = currentUrl.substr(0, currentUrl.lastIndexOf("/") + 1);
    window.location.href = afterWith + document.getElementById('search').value;
}