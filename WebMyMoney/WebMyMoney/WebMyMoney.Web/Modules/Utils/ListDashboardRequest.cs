using Serenity.Services;
using System;
using System.Collections;
using System.Collections.Generic;


namespace WebMyMoney.Modules.Utils
{
    public class ListDashboardRequest<T> : ServiceResponse
    {
            public List<T> Entities { get; set; }
            public List<object> Values { get; set; }
            public int TotalCount { get; set; }

             public decimal SumValue { get; set; }
            public int Skip { get; set; }
            public int Take { get; set; }

            

        
    }
}