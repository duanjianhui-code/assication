package duanjianhui.assication.myconfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

/**
 * @author Duanjianhui
 * @create 2020-11-04 11:42
 */
@Configuration
public class MyViewConfig extends WebMvcConfigurationSupport {
    //类路径下的所有静态资源文件夹
    public static final String[] JIN_TAI = {"classpath:/META-INF/resources/", "classpath:/resources/",
            "classpath:/static/", "classpath:/public/"};

    //增加访问路径
    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        if (!registry.hasMappingForPattern("/**")) {
            registry.addResourceHandler("/**").addResourceLocations(
                    JIN_TAI);
        }
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
    }
    /**
     *
     *
     * @Package: com.*.*.config
     * @ClassName: LoginConfig
     * @Description:拦截器配置
     */

        @Override
        public void addInterceptors(InterceptorRegistry registry) {
            //注册TestInterceptor拦截器
            InterceptorRegistration registration = registry.addInterceptor(new AdminInterceptor());
            registration.addPathPatterns("/**");                      //所有路径都被拦截
            registration.excludePathPatterns(                         //添加不拦截路径
                    "/login",            //登录
                    "/register",
                    "/**/*.html",            //html静态资源
                    "/**/*.js",              //js静态资源
                    "/**/*.css",             //css静态资源
                    "/**/*.woff",
                    "/**/*.ttf"
            );
        }
}
