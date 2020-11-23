package duanjianhui.assication.entity;

import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Duanjianhui
 * @create 2020-11-10 10:30
 */
@Component
@Data
public class MyEmail {
    private String targetEmail;
    private String title;
    private String context;
    private MultipartFile file;
}
