using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PrimeiraAplicacao.Controllers
{
    public class ProdutosController : Controller
    {
        public ActionResult Procurar(String nome = "todos")
        {
            return Content(string.Format("Controller: {0}, Action: {1}, Nome: {2}",
                RouteData.Values["controller"],
                RouteData.Values["action"],
                nome));
        }

    }
}
