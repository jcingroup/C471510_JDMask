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
namespace DotWeb.Controllers
{
    public class NewsController : WebUserController
    {
        public ActionResult list()
        {
            return View("News_list");
        }

        public ActionResult content()
        {
            return View("News_content");
        }
    }
}
