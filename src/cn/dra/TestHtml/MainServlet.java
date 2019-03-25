package cn.dra.TestHtml;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.ws.RequestWrapper;
import java.io.IOException;

/**
 * @ahthor Edward Drafy
 * @date 2019/2/27
 */
@WebServlet(name = "MainServlet")
public class MainServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String uri=request.getRequestURI();

        if(uri.endsWith("statistics.do")){
            statistics(request,response);
        }
        if(uri.endsWith("closeTab.do")){
            closeTab(request);
        }
        if(uri.endsWith("opens.do")){
            opens(request);
        }

    }

    protected void opens(HttpServletRequest request){

        System.out.println("开始时间："+request.getParameter("startime"));
        System.out.println("您的操作系统："+request.getParameter("os"));
        System.out.println("IP地址："+request.getParameter("cip"));
        System.out.println("城市地址："+request.getParameter("cname"));
        System.out.println("页面标题："+request.getParameter("title"));

    }
    protected void statistics(HttpServletRequest request,HttpServletResponse response){

        System.out.println("浏览内容："+ request.getParameter("t"));

    }
    protected void closeTab(HttpServletRequest request){
        System.out.println("离开时间："+request.getParameter("lefttime"));
    }



    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

}
