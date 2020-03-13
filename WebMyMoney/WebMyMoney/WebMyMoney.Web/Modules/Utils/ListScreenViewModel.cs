using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebMyMoney.Default.Entities;

namespace WebMyMoney.Modules.Utils
{
    public class ListScreenViewModel<T> : ListResponse<T>
    {
        public List<T> Lista { get; set; }
        public decimal TotalPendente { get; set; }
        public decimal TotalConcluido { get; set; }
    }
}