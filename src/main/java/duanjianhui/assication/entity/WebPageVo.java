package duanjianhui.assication.entity;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.Collection;

/**
 * @author Duanjianhui
 * @create 2020-11-09 12:40
 */
@Component
@Data
public class WebPageVo {
    private int code;
    private String msg;
    private long count;
    private Collection<?> data;
}
