package duanjianhui.assication.controller;

import duanjianhui.assication.entity.MyEmail;
import duanjianhui.assication.entity.WebPageVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 * @author Duanjianhui
 * @create 2020-11-09 1:21
 */
@Controller
public class EmailController {
    @Autowired
    JavaMailSenderImpl mailSender;
    @Autowired
    private WebPageVo webPageVo;

    @GetMapping("/sendemail")
    public String sendemail() {
        return "views/email/sendmail";
    }

    /**
     * 发送邮件
     *
     * @param email
     * @param file
     * @return
     */
    @PostMapping("/sendemail")
    @ResponseBody
    public WebPageVo sendEmail(MyEmail email){
        MultipartFile file = email.getFile();
        int i = 0;
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = null;
        try {
            mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setSubject(email.getTitle());
            mimeMessageHelper.setText(email.getContext());
            mimeMessageHelper.setTo(email.getTargetEmail());
            mimeMessageHelper.setFrom("1256591321@qq.com");
            if (file != null) {
                mimeMessageHelper.addAttachment(file.getOriginalFilename(), file);
            }
            mailSender.send(mimeMessage);
            webPageVo.setCode(1);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        return webPageVo;
    }
}
