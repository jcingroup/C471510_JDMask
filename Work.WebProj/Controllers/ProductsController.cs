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
    public class ProductsController : WebUserController
    {
        public ActionResult list()
        {
            return View("Products_list");
        }

        public ActionResult content()
        {
            return View("Products_content");
        }

        public ActionResult content2()
        {
            return View("Products_content2");
        }

        public ActionResult content3()
        {
            return View("Products_content3");
        }

        public ActionResult content4()
        {
            return View("Products_content4");
        }

        public ActionResult content5()
        {
            return View("Products_content5");
        }
    }
}
