import http from 'http';
import Request from '@/request';
import Response from '@/response';

class Server{
    protected serverConfig: TServerConfiguration = {
        port: 3000,
        host: 'localhost'
    };
    constructor(config: TServerConfiguration){
        this.serverConfig = config;
    }
    startServer(){
        const server = http.createServer((req, res) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Hello World!');
            res.end();
        });
        server.listen(this.serverConfig.port, this.serverConfig.host, () => {
            console.log(`Server running at http://${this.serverConfig.host}:${this.serverConfig.port}/`);
        });
    }
}

export default Server;