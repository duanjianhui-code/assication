package duanjianhui;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = {"duanjianhui.assication.repository"})
public class AssicationApplication {

    public static void main(String[] args) {
        SpringApplication.run(AssicationApplication.class, args);
    }

}
