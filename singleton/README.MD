## 应用场景

###1、 资源共享的情况下，避免由于资源操作时导致的性能或损耗等。如上述中的日志文件，应用配置。</br>

###2、 控制资源的情况下，方便资源之间的互相通信。如线程池等。</br>
###3、数据库连接池的设计一般也是采用单例模式，因为数据库连接是一种数据库资源。</br>