﻿using System.Web;
using System.Web.Mvc;

namespace PayPal.LEB.MonitoringDashboard
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
