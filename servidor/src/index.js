import app from "./app";
import './connection';

process.removeAllListeners('warning');

app.listen(app.get('port'));
console.log('Server running on port ' + app.get('port'));