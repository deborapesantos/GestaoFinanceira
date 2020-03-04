using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace WebMyMoney.Administration
{
    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "WebMyMoney.Administration.RoleCheckEditor";

        public RoleCheckEditorAttribute()
            : base(Key)
        {
        }
    }
}

