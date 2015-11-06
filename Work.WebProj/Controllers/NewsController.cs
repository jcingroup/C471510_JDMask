using System.Linq;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;
using System.IO;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using ProcCore.HandleResult;
using DotWeb.CommSetup;
using DotWeb.Controller;
using ProcCore.Business.DB0;

namespace DotWeb.Controllers
{
    public class NewsController : WebUserController
    {
        public ActionResult list()
        {
            List<m_News> items = new List<m_News>();
            using (var db0 = getDB0())
            {
                items = db0.News.Where(x => !x.i_Hide).OrderByDescending(x => x.news_date)
                                               .Select(x => new m_News()
                                               {
                                                   news_id = x.news_id,
                                                   news_title = x.news_title,
                                                   news_date = x.news_date,
                                                   news_content = x.news_content
                                               }).ToList();
                foreach (var item in items)
                {
                    item.news_content = RemoveHTMLTag(item.news_content);//移除html標籤
                }
            }
            return View("News_list", items);
        }

        public ActionResult content(int? id)
        {
            News item;
            using (var db0 = getDB0())
            {
                Boolean Exist = db0.News.Any(x => x.news_id == id && x.i_Hide == false);
                if (id == null || !Exist)
                {
                    return Redirect("~/News/list");
                }
                else
                {
                    item = db0.News.Find(id);
                }
            }
            return View("News_content",item);
        }
    }
}
