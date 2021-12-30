using Microsoft.AspNetCore.Mvc;

namespace DefaultMask.Controllers
{
    public class DefaultMaskController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
