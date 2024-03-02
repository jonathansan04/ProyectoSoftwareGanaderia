import app from "./app";

import './DB/connection';

app.listen(app.get('port'));

console.log('Server running on port ' + app.get('port'));
