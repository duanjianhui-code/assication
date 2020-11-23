package duanjianhui.assication.test;

import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;

/**
 * @author Duanjianhui
 * @create 2020-11-09 13:57
 */
public class test {
    @Test
    public void test() throws IOException {
        String savePath="C:\\Users\\duanjianhui\\Desktop\\file\\1.jpg";
        File savefile =  new File(savePath);
        if (!savefile.exists()){
            System.out.println(1);
            savefile.createNewFile();
            System.out.println(2);
        }
    }
}
