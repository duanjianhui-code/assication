package duanjianhui.assication.controller;

import duanjianhui.assication.entity.MyFile;
import duanjianhui.assication.entity.WebPageVo;
import duanjianhui.assication.service.DataService;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.system.ApplicationHome;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.jws.WebParam;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.logging.Logger;

/**
 * @author Duanjianhui
 * @create 2020-11-09 0:55
 */
@Controller
public class FileController {
    @Autowired
    private DataService dataService;

    @Autowired
    private WebPageVo webPageVo;

    @GetMapping("/upload")
    public String upload() {
        return "views/file/upload";
    }

    @PostMapping("/upload")
    @ResponseBody
    public WebPageVo upload(@RequestParam("file") MultipartFile file) throws MessagingException {
        String path = System.getProperty("user.dir") + "//upload//";
        String os = System.getProperty("os.name");
        if (os.toLowerCase().startsWith("win")) {
            path = System.getProperty("user.dir") + "\\upload\\";
        }
        String savePath = path + "//" + file.getOriginalFilename();
        if (file.isEmpty()) {
            webPageVo.setCode(1);
            return webPageVo;
        }
        try {
            File savefile = new File(savePath);
            if (!savefile.exists()) {
                savefile.createNewFile();
            }
            file.transferTo(savefile);
        } catch (IOException e) {
            e.printStackTrace();
        }
        webPageVo.setCode(0);
        return webPageVo;
    }

    @GetMapping("/download")
    public String download(Model model) {
        //window系统
        //String path=System.getProperty("user.dir")+"\\upload";
        //linux系统
        String path = System.getProperty("user.dir") + "//upload";
        String os = System.getProperty("os.name");
        if (os.toLowerCase().startsWith("win")) {
            path = System.getProperty("user.dir") + "\\upload";
        }
        File downloadPath = new File(path);
        if (!downloadPath.exists()) {
            downloadPath.mkdirs();
        }
        File[] files = downloadPath.listFiles();
        List<MyFile> myFiles = new ArrayList<>();
        for (File file : files) {
            MyFile myFile = new MyFile();
            myFile.setFilename(file.getName());
            myFiles.add(myFile);
        }
        model.addAttribute("files", myFiles);
        dataService.download_add();
        return "views/file/download";
    }

    @GetMapping("/deletefile")
    @ResponseBody
    public int deletefile(String filename) {
        String path = System.getProperty("user.dir") + "//upload//";
        String os = System.getProperty("os.name");
        if (os.toLowerCase().startsWith("win")) {
            path = System.getProperty("user.dir") + "\\upload\\";
        }

        File file = new File(path + filename);
        boolean delete = file.delete();
        int i = 0;
        if (delete) {
            i = 1;
        }
        return i;
    }

    /**
     * 下载文件
     *
     * @param filename 文件名
     * @param request
     * @param response
     */
    @GetMapping("/downloadfile")
    public void downloadfile(String filename, HttpServletRequest request, HttpServletResponse response) {

        String path = System.getProperty("user.dir") + "//upload//";
        String os = System.getProperty("os.name");
        if (os.toLowerCase().startsWith("win")) {
            path = System.getProperty("user.dir") + "\\upload\\";
        }
        File file = new File(path + filename);
        FileInputStream inputStream = null;
        ServletOutputStream outputStream = null;
        try {
            response.setHeader("Content-Type", "application/x-msdownload");
            response.setHeader("Content-Disposition", "attachment; filename=" + new String(filename.getBytes(), "ISO8859-1"));

            inputStream = new FileInputStream(file);
            outputStream = response.getOutputStream();
            outputStream.flush();
            int length = 0;
            byte[] buf = new byte[1024];
            while ((length = inputStream.read(buf)) != -1 & inputStream != null) {
                outputStream.write(buf, 0, length);
            }
            outputStream.flush();
            inputStream.close();
            outputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
