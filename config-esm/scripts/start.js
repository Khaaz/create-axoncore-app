const pm2 = require('pm2');

// Start process
console.log('>> Starting ExampleBot');
pm2.connect( (err) => {
    if (err) {
        console.error(err);
        process.exit(2);
    }
    pm2.start( {
        name: 'example',
        cwd: './src',
        script: 'index.js',
        args: ['--color'],
        node_args: '-r esm',
        
        exec_mode: 'fork',
        max_memory_restart: '1G',
        
        error: '../logs/error.err',
        output: '../logs/output.log',
        pid: '../logs/pid.pid',
        
        autorestart: true,
        wait_ready: true,
    }, (e) => {
        pm2.disconnect();
        if (e) throw e;
    } );
} );
