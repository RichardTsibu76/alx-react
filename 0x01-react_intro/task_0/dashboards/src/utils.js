
function getFullYear  () {
  return new Date().getFullYear()
}
export default getFullYear;

function getFooterCopy (isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}
export  {getFooterCopy, getFullYear}; 

function getLatestNotification() { 
  return '<strong>Urgent requirement</strong> - complete by EOD';
} 