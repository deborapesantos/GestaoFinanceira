using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMyMoney.Modules.Default
{
    public class DefaultListRequest : ListRequest
    {
        public int mes { get; set; }
    }
}