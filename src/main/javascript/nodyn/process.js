DTRACE_NET_SERVER_CONNECTION = function() {};
DTRACE_NET_STREAM_END        = function() {};
DTRACE_NET_SOCKET_READ       = function() {};
DTRACE_NET_SOCKET_WRITE      = function() {};
DTRACE_HTTP_SERVER_REQUEST   = function() {};
DTRACE_HTTP_SERVER_RESPONSE  = function() {};
DTRACE_HTTP_CLIENT_REQUEST   = function() {};
DTRACE_HTTP_CLIENT_RESPONSE  = function() {};
COUNTER_NET_SERVER_CONNECTION = function() {};
COUNTER_NET_SERVER_CONNECTION_CLOSE = function() {};

(function(javaProcess){

  function Process(process) {
    this._process = process;
    this.moduleLoadList = [];

    Object.defineProperty( this, "EVENT_LOOP", {
      get: function() {
        return this._process.eventLoop;
      }
    });

    this.context = this._process.vertx;

    this.binding = function(name) {
      return this._process.binding(name);
    };

    this._setupAsyncListener = function(asyncFlags, runAsyncQueue, loadAsyncQueue, unloadAsyncQueue) {
      this._process.setupAsyncListener( runAsyncQueue, loadAsyncQueue, unloadAsyncQueue);

      this._runAsyncQueue = runAsyncQueue;
      this._loadAsyncQueue = loadAsyncQueue;
      this._unloadAsyncQueue = unloadAsyncQueue;
    };

    this._setupNextTick = function(tickInfo, tickCallback) {
      this._process.setupNextTick( tickInfo, tickCallback );

      this._tickInfo = tickInfo;
      this._tickCallback = tickCallback;
    };

    this._setupDomainUse = function(domain, domainFlag) {
    };

    this.cwd = function() {
      return System.getProperty("user.dir");
    }

    this.execPath = this._process.execPath;

    // ARGV
    this.argv = [];
    this.argv.push( this._process.argv0 );

    var rawArgv = this._process.nodyn.config.argv;
    if ( rawArgv ) {
      var numArgs = rawArgv.length;

      var i = 0;
      while ( i < numArgs ) {
        var arg = rawArgv[i];
        if ( arg == '-e' || arg == '--eval') {
          ++i;
          this._eval = rawArgv[i];
        } else {
          this.argv.push( rawArgv[i] );
        }
        ++i;
      }
    }

    this.env = {
      HOME: System.getProperty("user.home"),
    };

    this.reallyExit = function(code) {
      System.exit( code );
    };
  }


  return new Process(javaProcess);
})




