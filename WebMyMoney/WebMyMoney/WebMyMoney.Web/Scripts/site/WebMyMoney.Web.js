var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadAssinanteForm = /** @class */ (function (_super) {
            __extends(CadAssinanteForm, _super);
            function CadAssinanteForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CadAssinanteForm.formKey = 'Default.CadAssinante';
            return CadAssinanteForm;
        }(Serenity.PrefixedContext));
        Default.CadAssinanteForm = CadAssinanteForm;
        [,
            ['DataCriacao', function () { return Serenity.DateEditor; }],
            ['UsuarioAdminId', function () { return Serenity.IntegerEditor; }],
            ['UsarioAdminNome', function () { return Serenity.StringEditor; }],
            ['UsuarioAdminEmail', function () { return Serenity.StringEditor; }],
            ['QdteGrupoFamiliar', function () { return Serenity.IntegerEditor; }],
            ['Ativo', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CadAssinanteForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadAssinanteRow;
        (function (CadAssinanteRow) {
            CadAssinanteRow.idProperty = 'CadAssinanteId';
            CadAssinanteRow.nameProperty = 'UsarioAdminNome';
            CadAssinanteRow.localTextPrefix = 'Default.CadAssinante';
            CadAssinanteRow.deletePermission = 'Administration:General';
            CadAssinanteRow.insertPermission = 'Administration:General';
            CadAssinanteRow.readPermission = 'Administration:General';
            CadAssinanteRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CadAssinanteRow.Fields || (CadAssinanteRow.Fields = {}));
            [
                'CadAssinanteId',
                'DataCriacao',
                'UsuarioAdminId',
                'UsarioAdminNome',
                'UsuarioAdminEmail',
                'QdteGrupoFamiliar',
                'Ativo'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CadAssinanteRow = Default.CadAssinanteRow || (Default.CadAssinanteRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadAssinanteService;
        (function (CadAssinanteService) {
            CadAssinanteService.baseUrl = 'Default/CadAssinante';
            var Methods;
            (function (Methods) {
            })(Methods = CadAssinanteService.Methods || (CadAssinanteService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CadAssinanteService[x] = function (r, s, o) {
                    return Q.serviceRequest(CadAssinanteService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CadAssinanteService.baseUrl + '/' + x;
            });
        })(CadAssinanteService = Default.CadAssinanteService || (Default.CadAssinanteService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadCartaoCreditoForm = /** @class */ (function (_super) {
            __extends(CadCartaoCreditoForm, _super);
            function CadCartaoCreditoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CadCartaoCreditoForm.formKey = 'Default.CadCartaoCredito';
            return CadCartaoCreditoForm;
        }(Serenity.PrefixedContext));
        Default.CadCartaoCreditoForm = CadCartaoCreditoForm;
        [,
            ['CadContaId', function () { return Serenity.IntegerEditor; }],
            ['CadGrupoFamiliarId', function () { return Serenity.IntegerEditor; }],
            ['CadUsuarioId', function () { return Serenity.IntegerEditor; }],
            ['CodigoTabTipoCartaoCredito', function () { return Serenity.IntegerEditor; }],
            ['Titulo', function () { return Serenity.StringEditor; }],
            ['Descricao', function () { return Serenity.StringEditor; }],
            ['DataPagamentoFatura', function () { return Serenity.DateEditor; }],
            ['DiaPagarFatura', function () { return Serenity.IntegerEditor; }],
            ['DataFechamentoFatura', function () { return Serenity.DateEditor; }],
            ['DiaFecharFatura', function () { return Serenity.IntegerEditor; }],
            ['ValorLimiteTotal', function () { return Serenity.DecimalEditor; }],
            ['ValorLimiteAtual', function () { return Serenity.DecimalEditor; }],
            ['ValorParcialFaturaAtual', function () { return Serenity.DecimalEditor; }],
            ['Saldo', function () { return Serenity.DecimalEditor; }],
            ['Ativo', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CadCartaoCreditoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadCartaoCreditoRow;
        (function (CadCartaoCreditoRow) {
            CadCartaoCreditoRow.idProperty = 'CadCartaoCreditoId';
            CadCartaoCreditoRow.nameProperty = 'Titulo';
            CadCartaoCreditoRow.localTextPrefix = 'Default.CadCartaoCredito';
            CadCartaoCreditoRow.deletePermission = 'Administration:General';
            CadCartaoCreditoRow.insertPermission = 'Administration:General';
            CadCartaoCreditoRow.readPermission = 'Administration:General';
            CadCartaoCreditoRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CadCartaoCreditoRow.Fields || (CadCartaoCreditoRow.Fields = {}));
            [
                'CadCartaoCreditoId',
                'CadContaId',
                'CadGrupoFamiliarId',
                'CadUsuarioId',
                'CodigoTabTipoCartaoCredito',
                'Titulo',
                'Descricao',
                'DataPagamentoFatura',
                'DiaPagarFatura',
                'DataFechamentoFatura',
                'DiaFecharFatura',
                'ValorLimiteTotal',
                'ValorLimiteAtual',
                'ValorParcialFaturaAtual',
                'Saldo',
                'Ativo',
                'CadContaCadGrupoFamiliarId',
                'CadContaCadUsuarioId',
                'CadContaCodigoTabTipoConta',
                'CadContaValorInicial',
                'CadContaSaldoAtual',
                'CadContaTitulo',
                'CadContaAtivo',
                'CadContaDataInicial',
                'CadGrupoFamiliarCadAssinanteId',
                'CadGrupoFamiliarAtivo',
                'CadGrupoFamiliarDataCriacao',
                'CadGrupoFamiliarCodigoAcesso',
                'CadGrupoFamiliarQdteUsuarios',
                'CadUsuarioCadGrupoFamiliarId',
                'CadUsuarioUserId',
                'CadUsuarioNome',
                'CadUsuarioTelefone',
                'CadUsuarioDataCriacao',
                'CadUsuarioEmail',
                'CadUsuarioAtivo',
                'CodigoTabTipoCartaoCreditoDescricao',
                'CodigoTabTipoCartaoCreditoIcone'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CadCartaoCreditoRow = Default.CadCartaoCreditoRow || (Default.CadCartaoCreditoRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadCartaoCreditoService;
        (function (CadCartaoCreditoService) {
            CadCartaoCreditoService.baseUrl = 'Default/CadCartaoCredito';
            var Methods;
            (function (Methods) {
            })(Methods = CadCartaoCreditoService.Methods || (CadCartaoCreditoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CadCartaoCreditoService[x] = function (r, s, o) {
                    return Q.serviceRequest(CadCartaoCreditoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CadCartaoCreditoService.baseUrl + '/' + x;
            });
        })(CadCartaoCreditoService = Default.CadCartaoCreditoService || (Default.CadCartaoCreditoService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadContaForm = /** @class */ (function (_super) {
            __extends(CadContaForm, _super);
            function CadContaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CadContaForm.formKey = 'Default.CadConta';
            return CadContaForm;
        }(Serenity.PrefixedContext));
        Default.CadContaForm = CadContaForm;
        [,
            ['CadGrupoFamiliarId', function () { return Serenity.IntegerEditor; }],
            ['CadUsuarioId', function () { return Serenity.IntegerEditor; }],
            ['CodigoTabTipoConta', function () { return Serenity.IntegerEditor; }],
            ['ValorInicial', function () { return Serenity.DecimalEditor; }],
            ['SaldoAtual', function () { return Serenity.DecimalEditor; }],
            ['Titulo', function () { return Serenity.StringEditor; }],
            ['Ativo', function () { return Serenity.BooleanEditor; }],
            ['DataInicial', function () { return Serenity.DateEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CadContaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadContaRow;
        (function (CadContaRow) {
            CadContaRow.idProperty = 'CadContaId';
            CadContaRow.nameProperty = 'Titulo';
            CadContaRow.localTextPrefix = 'Default.CadConta';
            CadContaRow.deletePermission = 'Administration:General';
            CadContaRow.insertPermission = 'Administration:General';
            CadContaRow.readPermission = 'Administration:General';
            CadContaRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CadContaRow.Fields || (CadContaRow.Fields = {}));
            [
                'CadContaId',
                'CadGrupoFamiliarId',
                'CadUsuarioId',
                'CodigoTabTipoConta',
                'ValorInicial',
                'SaldoAtual',
                'Titulo',
                'Ativo',
                'DataInicial',
                'CadGrupoFamiliarCadAssinanteId',
                'CadGrupoFamiliarAtivo',
                'CadGrupoFamiliarDataCriacao',
                'CadGrupoFamiliarCodigoAcesso',
                'CadGrupoFamiliarQdteUsuarios',
                'CadUsuarioCadGrupoFamiliarId',
                'CadUsuarioUserId',
                'CadUsuarioNome',
                'CadUsuarioTelefone',
                'CadUsuarioDataCriacao',
                'CadUsuarioEmail',
                'CadUsuarioAtivo',
                'CodigoTabTipoContaDescricao'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CadContaRow = Default.CadContaRow || (Default.CadContaRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadContaService;
        (function (CadContaService) {
            CadContaService.baseUrl = 'Default/CadConta';
            var Methods;
            (function (Methods) {
            })(Methods = CadContaService.Methods || (CadContaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CadContaService[x] = function (r, s, o) {
                    return Q.serviceRequest(CadContaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CadContaService.baseUrl + '/' + x;
            });
        })(CadContaService = Default.CadContaService || (Default.CadContaService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadDespesaForm = /** @class */ (function (_super) {
            __extends(CadDespesaForm, _super);
            function CadDespesaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CadDespesaForm.formKey = 'Default.CadDespesa';
            return CadDespesaForm;
        }(Serenity.PrefixedContext));
        Default.CadDespesaForm = CadDespesaForm;
        [,
            ['CadContaId', function () { return Serenity.IntegerEditor; }],
            ['CadGrupoFamiliarId', function () { return Serenity.IntegerEditor; }],
            ['CadUsuarioId', function () { return Serenity.IntegerEditor; }],
            ['CodigoTabTipoDespesa', function () { return Serenity.IntegerEditor; }],
            ['Titulo', function () { return Serenity.StringEditor; }],
            ['DataPagamento', function () { return Serenity.DateEditor; }],
            ['DataCriacao', function () { return Serenity.DateEditor; }],
            ['IsFixo', function () { return Serenity.BooleanEditor; }],
            ['DataVencimento', function () { return Serenity.DateEditor; }],
            ['ValorTotal', function () { return Serenity.DecimalEditor; }],
            ['MultasJuros', function () { return Serenity.DecimalEditor; }],
            ['DataFixaVencimento', function () { return Serenity.IntegerEditor; }],
            ['Pago', function () { return Serenity.BooleanEditor; }],
            ['Ativo', function () { return Serenity.BooleanEditor; }],
            ['Descontos', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CadDespesaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadDespesaRow;
        (function (CadDespesaRow) {
            CadDespesaRow.idProperty = 'CadDespesaId';
            CadDespesaRow.nameProperty = 'Titulo';
            CadDespesaRow.localTextPrefix = 'Default.CadDespesa';
            CadDespesaRow.deletePermission = 'Administration:General';
            CadDespesaRow.insertPermission = 'Administration:General';
            CadDespesaRow.readPermission = 'Administration:General';
            CadDespesaRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CadDespesaRow.Fields || (CadDespesaRow.Fields = {}));
            [
                'CadDespesaId',
                'CadContaId',
                'CadGrupoFamiliarId',
                'CadUsuarioId',
                'CodigoTabTipoDespesa',
                'Titulo',
                'DataPagamento',
                'DataCriacao',
                'IsFixo',
                'DataVencimento',
                'ValorTotal',
                'MultasJuros',
                'DataFixaVencimento',
                'Pago',
                'Ativo',
                'Descontos',
                'CadContaCadGrupoFamiliarId',
                'CadContaCadUsuarioId',
                'CadContaCodigoTabTipoConta',
                'CadContaValorInicial',
                'CadContaSaldoAtual',
                'CadContaTitulo',
                'CadContaAtivo',
                'CadContaDataInicial',
                'CadGrupoFamiliarCadAssinanteId',
                'CadGrupoFamiliarAtivo',
                'CadGrupoFamiliarDataCriacao',
                'CadGrupoFamiliarCodigoAcesso',
                'CadGrupoFamiliarQdteUsuarios',
                'CadUsuarioCadGrupoFamiliarId',
                'CadUsuarioUserId',
                'CadUsuarioNome',
                'CadUsuarioTelefone',
                'CadUsuarioDataCriacao',
                'CadUsuarioEmail',
                'CadUsuarioAtivo',
                'CodigoTabTipoDespesaDescricao',
                'CodigoTabTipoDespesaIcone'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CadDespesaRow = Default.CadDespesaRow || (Default.CadDespesaRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadDespesaService;
        (function (CadDespesaService) {
            CadDespesaService.baseUrl = 'Default/CadDespesa';
            var Methods;
            (function (Methods) {
            })(Methods = CadDespesaService.Methods || (CadDespesaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CadDespesaService[x] = function (r, s, o) {
                    return Q.serviceRequest(CadDespesaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CadDespesaService.baseUrl + '/' + x;
            });
        })(CadDespesaService = Default.CadDespesaService || (Default.CadDespesaService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadGrupoFamiliarForm = /** @class */ (function (_super) {
            __extends(CadGrupoFamiliarForm, _super);
            function CadGrupoFamiliarForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CadGrupoFamiliarForm.formKey = 'Default.CadGrupoFamiliar';
            return CadGrupoFamiliarForm;
        }(Serenity.PrefixedContext));
        Default.CadGrupoFamiliarForm = CadGrupoFamiliarForm;
        [,
            ['CadAssinanteId', function () { return Serenity.IntegerEditor; }],
            ['Ativo', function () { return Serenity.BooleanEditor; }],
            ['DataCriacao', function () { return Serenity.DateEditor; }],
            ['CodigoAcesso', function () { return Serenity.StringEditor; }],
            ['QdteUsuarios', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CadGrupoFamiliarForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadGrupoFamiliarRow;
        (function (CadGrupoFamiliarRow) {
            CadGrupoFamiliarRow.idProperty = 'CadGrupoFamiliarId';
            CadGrupoFamiliarRow.nameProperty = 'CodigoAcesso';
            CadGrupoFamiliarRow.localTextPrefix = 'Default.CadGrupoFamiliar';
            CadGrupoFamiliarRow.deletePermission = 'Administration:General';
            CadGrupoFamiliarRow.insertPermission = 'Administration:General';
            CadGrupoFamiliarRow.readPermission = 'Administration:General';
            CadGrupoFamiliarRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CadGrupoFamiliarRow.Fields || (CadGrupoFamiliarRow.Fields = {}));
            [
                'CadGrupoFamiliarId',
                'CadAssinanteId',
                'Ativo',
                'DataCriacao',
                'CodigoAcesso',
                'QdteUsuarios',
                'CadAssinanteDataCriacao',
                'CadAssinanteUsuarioAdminId',
                'CadAssinanteUsarioAdminNome',
                'CadAssinanteUsuarioAdminEmail',
                'CadAssinanteQdteGrupoFamiliar',
                'CadAssinanteAtivo'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CadGrupoFamiliarRow = Default.CadGrupoFamiliarRow || (Default.CadGrupoFamiliarRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadGrupoFamiliarService;
        (function (CadGrupoFamiliarService) {
            CadGrupoFamiliarService.baseUrl = 'Default/CadGrupoFamiliar';
            var Methods;
            (function (Methods) {
            })(Methods = CadGrupoFamiliarService.Methods || (CadGrupoFamiliarService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CadGrupoFamiliarService[x] = function (r, s, o) {
                    return Q.serviceRequest(CadGrupoFamiliarService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CadGrupoFamiliarService.baseUrl + '/' + x;
            });
        })(CadGrupoFamiliarService = Default.CadGrupoFamiliarService || (Default.CadGrupoFamiliarService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadObjetivoForm = /** @class */ (function (_super) {
            __extends(CadObjetivoForm, _super);
            function CadObjetivoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CadObjetivoForm.formKey = 'Default.CadObjetivo';
            return CadObjetivoForm;
        }(Serenity.PrefixedContext));
        Default.CadObjetivoForm = CadObjetivoForm;
        [,
            ['CadContaId', function () { return Serenity.IntegerEditor; }],
            ['CadGrupoFamiliarId', function () { return Serenity.IntegerEditor; }],
            ['CadUsuarioId', function () { return Serenity.IntegerEditor; }],
            ['CodigoTabTipoObjetivo', function () { return Serenity.IntegerEditor; }],
            ['Titulo', function () { return Serenity.StringEditor; }],
            ['Descricao', function () { return Serenity.StringEditor; }],
            ['ValorFinal', function () { return Serenity.DecimalEditor; }],
            ['ValorInicial', function () { return Serenity.DecimalEditor; }],
            ['ValorAtual', function () { return Serenity.DecimalEditor; }],
            ['DataFinal', function () { return Serenity.DateEditor; }],
            ['DataInicial', function () { return Serenity.DateEditor; }],
            ['Ativo', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CadObjetivoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadObjetivoRow;
        (function (CadObjetivoRow) {
            CadObjetivoRow.idProperty = 'CadObjetivoId';
            CadObjetivoRow.nameProperty = 'Titulo';
            CadObjetivoRow.localTextPrefix = 'Default.CadObjetivo';
            CadObjetivoRow.deletePermission = 'Administration:General';
            CadObjetivoRow.insertPermission = 'Administration:General';
            CadObjetivoRow.readPermission = 'Administration:General';
            CadObjetivoRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CadObjetivoRow.Fields || (CadObjetivoRow.Fields = {}));
            [
                'CadObjetivoId',
                'CadContaId',
                'CadGrupoFamiliarId',
                'CadUsuarioId',
                'CodigoTabTipoObjetivo',
                'Titulo',
                'Descricao',
                'ValorFinal',
                'ValorInicial',
                'ValorAtual',
                'DataFinal',
                'DataInicial',
                'Ativo',
                'CadContaCadGrupoFamiliarId',
                'CadContaCadUsuarioId',
                'CadContaCodigoTabTipoConta',
                'CadContaValorInicial',
                'CadContaSaldoAtual',
                'CadContaTitulo',
                'CadContaAtivo',
                'CadContaDataInicial',
                'CadGrupoFamiliarCadAssinanteId',
                'CadGrupoFamiliarAtivo',
                'CadGrupoFamiliarDataCriacao',
                'CadGrupoFamiliarCodigoAcesso',
                'CadGrupoFamiliarQdteUsuarios',
                'CadUsuarioCadGrupoFamiliarId',
                'CadUsuarioUserId',
                'CadUsuarioNome',
                'CadUsuarioTelefone',
                'CadUsuarioDataCriacao',
                'CadUsuarioEmail',
                'CadUsuarioAtivo',
                'CodigoTabTipoObjetivoDescricao'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CadObjetivoRow = Default.CadObjetivoRow || (Default.CadObjetivoRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadObjetivoService;
        (function (CadObjetivoService) {
            CadObjetivoService.baseUrl = 'Default/CadObjetivo';
            var Methods;
            (function (Methods) {
            })(Methods = CadObjetivoService.Methods || (CadObjetivoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CadObjetivoService[x] = function (r, s, o) {
                    return Q.serviceRequest(CadObjetivoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CadObjetivoService.baseUrl + '/' + x;
            });
        })(CadObjetivoService = Default.CadObjetivoService || (Default.CadObjetivoService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadReceitaForm = /** @class */ (function (_super) {
            __extends(CadReceitaForm, _super);
            function CadReceitaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CadReceitaForm.formKey = 'Default.CadReceita';
            return CadReceitaForm;
        }(Serenity.PrefixedContext));
        Default.CadReceitaForm = CadReceitaForm;
        [,
            ['CadGrupoFamiliarId', function () { return Serenity.IntegerEditor; }],
            ['CadContaId', function () { return Serenity.IntegerEditor; }],
            ['CadUsuarioId', function () { return Serenity.IntegerEditor; }],
            ['CodigoTabTipoReceita', function () { return Serenity.IntegerEditor; }],
            ['Titulo', function () { return Serenity.StringEditor; }],
            ['Descricao', function () { return Serenity.StringEditor; }],
            ['DataRecebimento', function () { return Serenity.DateEditor; }],
            ['DataCriacao', function () { return Serenity.DateEditor; }],
            ['IsFixo', function () { return Serenity.BooleanEditor; }],
            ['DataFixaRecebimento', function () { return Serenity.IntegerEditor; }],
            ['Valor', function () { return Serenity.DecimalEditor; }],
            ['Recebido', function () { return Serenity.BooleanEditor; }],
            ['Ativo', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CadReceitaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadReceitaRow;
        (function (CadReceitaRow) {
            CadReceitaRow.idProperty = 'CadReceitaId';
            CadReceitaRow.nameProperty = 'Titulo';
            CadReceitaRow.localTextPrefix = 'Default.CadReceita';
            CadReceitaRow.deletePermission = 'Administration:General';
            CadReceitaRow.insertPermission = 'Administration:General';
            CadReceitaRow.readPermission = 'Administration:General';
            CadReceitaRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CadReceitaRow.Fields || (CadReceitaRow.Fields = {}));
            [
                'CadReceitaId',
                'CadGrupoFamiliarId',
                'CadContaId',
                'CadUsuarioId',
                'CodigoTabTipoReceita',
                'Titulo',
                'Descricao',
                'DataRecebimento',
                'DataCriacao',
                'IsFixo',
                'DataFixaRecebimento',
                'Valor',
                'Recebido',
                'Ativo',
                'CadGrupoFamiliarCadAssinanteId',
                'CadGrupoFamiliarAtivo',
                'CadGrupoFamiliarDataCriacao',
                'CadGrupoFamiliarCodigoAcesso',
                'CadGrupoFamiliarQdteUsuarios',
                'CadContaCadGrupoFamiliarId',
                'CadContaCadUsuarioId',
                'CadContaCodigoTabTipoConta',
                'CadContaValorInicial',
                'CadContaSaldoAtual',
                'CadContaTitulo',
                'CadContaAtivo',
                'CadContaDataInicial',
                'CadUsuarioCadGrupoFamiliarId',
                'CadUsuarioUserId',
                'CadUsuarioNome',
                'CadUsuarioTelefone',
                'CadUsuarioDataCriacao',
                'CadUsuarioEmail',
                'CadUsuarioAtivo',
                'CodigoTabTipoReceitaDescricao'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CadReceitaRow = Default.CadReceitaRow || (Default.CadReceitaRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadReceitaService;
        (function (CadReceitaService) {
            CadReceitaService.baseUrl = 'Default/CadReceita';
            var Methods;
            (function (Methods) {
            })(Methods = CadReceitaService.Methods || (CadReceitaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CadReceitaService[x] = function (r, s, o) {
                    return Q.serviceRequest(CadReceitaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CadReceitaService.baseUrl + '/' + x;
            });
        })(CadReceitaService = Default.CadReceitaService || (Default.CadReceitaService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadUsuarioForm = /** @class */ (function (_super) {
            __extends(CadUsuarioForm, _super);
            function CadUsuarioForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CadUsuarioForm.formKey = 'Default.CadUsuario';
            return CadUsuarioForm;
        }(Serenity.PrefixedContext));
        Default.CadUsuarioForm = CadUsuarioForm;
        [,
            ['CadGrupoFamiliarId', function () { return Serenity.IntegerEditor; }],
            ['UserId', function () { return Serenity.IntegerEditor; }],
            ['Nome', function () { return Serenity.StringEditor; }],
            ['Telefone', function () { return Serenity.StringEditor; }],
            ['DataCriacao', function () { return Serenity.DateEditor; }],
            ['Email', function () { return Serenity.StringEditor; }],
            ['Ativo', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CadUsuarioForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadUsuarioRow;
        (function (CadUsuarioRow) {
            CadUsuarioRow.idProperty = 'CadUsuarioId';
            CadUsuarioRow.nameProperty = 'Nome';
            CadUsuarioRow.localTextPrefix = 'Default.CadUsuario';
            CadUsuarioRow.deletePermission = 'Administration:General';
            CadUsuarioRow.insertPermission = 'Administration:General';
            CadUsuarioRow.readPermission = 'Administration:General';
            CadUsuarioRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = CadUsuarioRow.Fields || (CadUsuarioRow.Fields = {}));
            [
                'CadUsuarioId',
                'CadGrupoFamiliarId',
                'UserId',
                'Nome',
                'Telefone',
                'DataCriacao',
                'Email',
                'Ativo',
                'CadGrupoFamiliarCadAssinanteId',
                'CadGrupoFamiliarAtivo',
                'CadGrupoFamiliarDataCriacao',
                'CadGrupoFamiliarCodigoAcesso',
                'CadGrupoFamiliarQdteUsuarios',
                'UserUsername',
                'UserDisplayName',
                'UserEmail',
                'UserSource',
                'UserPasswordHash',
                'UserPasswordSalt',
                'UserLastDirectoryUpdate',
                'UserUserImage',
                'UserInsertDate',
                'UserInsertUserId',
                'UserUpdateDate',
                'UserUpdateUserId',
                'UserIsActive',
                'UserUsuarioId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CadUsuarioRow = Default.CadUsuarioRow || (Default.CadUsuarioRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadUsuarioService;
        (function (CadUsuarioService) {
            CadUsuarioService.baseUrl = 'Default/CadUsuario';
            var Methods;
            (function (Methods) {
            })(Methods = CadUsuarioService.Methods || (CadUsuarioService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CadUsuarioService[x] = function (r, s, o) {
                    return Q.serviceRequest(CadUsuarioService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CadUsuarioService.baseUrl + '/' + x;
            });
        })(CadUsuarioService = Default.CadUsuarioService || (Default.CadUsuarioService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var RolePermissionsRow;
        (function (RolePermissionsRow) {
            RolePermissionsRow.idProperty = 'RolePermissionId';
            RolePermissionsRow.nameProperty = 'PermissionKey';
            RolePermissionsRow.localTextPrefix = 'Default.RolePermissions';
            RolePermissionsRow.deletePermission = 'Administration:General';
            RolePermissionsRow.insertPermission = 'Administration:General';
            RolePermissionsRow.readPermission = 'Administration:General';
            RolePermissionsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionsRow.Fields || (RolePermissionsRow.Fields = {}));
            [
                'RolePermissionId',
                'RoleId',
                'PermissionKey'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionsRow = Default.RolePermissionsRow || (Default.RolePermissionsRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var RolesRow;
        (function (RolesRow) {
            RolesRow.idProperty = 'RoleId';
            RolesRow.nameProperty = 'RoleName';
            RolesRow.localTextPrefix = 'Default.Roles';
            RolesRow.deletePermission = 'Administration:General';
            RolesRow.insertPermission = 'Administration:General';
            RolesRow.readPermission = 'Administration:General';
            RolesRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = RolesRow.Fields || (RolesRow.Fields = {}));
            [
                'RoleId',
                'RoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RolesRow = Default.RolesRow || (Default.RolesRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoCartaoCreditoForm = /** @class */ (function (_super) {
            __extends(TabTipoCartaoCreditoForm, _super);
            function TabTipoCartaoCreditoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TabTipoCartaoCreditoForm.formKey = 'Default.TabTipoCartaoCredito';
            return TabTipoCartaoCreditoForm;
        }(Serenity.PrefixedContext));
        Default.TabTipoCartaoCreditoForm = TabTipoCartaoCreditoForm;
        [,
            ['Descricao', function () { return Serenity.StringEditor; }],
            ['Icone', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(TabTipoCartaoCreditoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoCartaoCreditoRow;
        (function (TabTipoCartaoCreditoRow) {
            TabTipoCartaoCreditoRow.idProperty = 'CodigoTabTipoCartaoCredito';
            TabTipoCartaoCreditoRow.nameProperty = 'Descricao';
            TabTipoCartaoCreditoRow.localTextPrefix = 'Default.TabTipoCartaoCredito';
            TabTipoCartaoCreditoRow.deletePermission = 'Administration:General';
            TabTipoCartaoCreditoRow.insertPermission = 'Administration:General';
            TabTipoCartaoCreditoRow.readPermission = 'Administration:General';
            TabTipoCartaoCreditoRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = TabTipoCartaoCreditoRow.Fields || (TabTipoCartaoCreditoRow.Fields = {}));
            [
                'CodigoTabTipoCartaoCredito',
                'Descricao',
                'Icone'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TabTipoCartaoCreditoRow = Default.TabTipoCartaoCreditoRow || (Default.TabTipoCartaoCreditoRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoCartaoCreditoService;
        (function (TabTipoCartaoCreditoService) {
            TabTipoCartaoCreditoService.baseUrl = 'Default/TabTipoCartaoCredito';
            var Methods;
            (function (Methods) {
            })(Methods = TabTipoCartaoCreditoService.Methods || (TabTipoCartaoCreditoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TabTipoCartaoCreditoService[x] = function (r, s, o) {
                    return Q.serviceRequest(TabTipoCartaoCreditoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TabTipoCartaoCreditoService.baseUrl + '/' + x;
            });
        })(TabTipoCartaoCreditoService = Default.TabTipoCartaoCreditoService || (Default.TabTipoCartaoCreditoService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoContaForm = /** @class */ (function (_super) {
            __extends(TabTipoContaForm, _super);
            function TabTipoContaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TabTipoContaForm.formKey = 'Default.TabTipoConta';
            return TabTipoContaForm;
        }(Serenity.PrefixedContext));
        Default.TabTipoContaForm = TabTipoContaForm;
        [,
            ['Descricao', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(TabTipoContaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoContaRow;
        (function (TabTipoContaRow) {
            TabTipoContaRow.idProperty = 'CodigoTabTipoConta';
            TabTipoContaRow.nameProperty = 'Descricao';
            TabTipoContaRow.localTextPrefix = 'Default.TabTipoConta';
            TabTipoContaRow.deletePermission = 'Administration:General';
            TabTipoContaRow.insertPermission = 'Administration:General';
            TabTipoContaRow.readPermission = 'Administration:General';
            TabTipoContaRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = TabTipoContaRow.Fields || (TabTipoContaRow.Fields = {}));
            [
                'CodigoTabTipoConta',
                'Descricao'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TabTipoContaRow = Default.TabTipoContaRow || (Default.TabTipoContaRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoContaService;
        (function (TabTipoContaService) {
            TabTipoContaService.baseUrl = 'Default/TabTipoConta';
            var Methods;
            (function (Methods) {
            })(Methods = TabTipoContaService.Methods || (TabTipoContaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TabTipoContaService[x] = function (r, s, o) {
                    return Q.serviceRequest(TabTipoContaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TabTipoContaService.baseUrl + '/' + x;
            });
        })(TabTipoContaService = Default.TabTipoContaService || (Default.TabTipoContaService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoDespesaForm = /** @class */ (function (_super) {
            __extends(TabTipoDespesaForm, _super);
            function TabTipoDespesaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TabTipoDespesaForm.formKey = 'Default.TabTipoDespesa';
            return TabTipoDespesaForm;
        }(Serenity.PrefixedContext));
        Default.TabTipoDespesaForm = TabTipoDespesaForm;
        [,
            ['Descricao', function () { return Serenity.StringEditor; }],
            ['Icone', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(TabTipoDespesaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoDespesaRow;
        (function (TabTipoDespesaRow) {
            TabTipoDespesaRow.idProperty = 'CodigoTabTipoDespesa';
            TabTipoDespesaRow.nameProperty = 'Descricao';
            TabTipoDespesaRow.localTextPrefix = 'Default.TabTipoDespesa';
            TabTipoDespesaRow.deletePermission = 'Administration:General';
            TabTipoDespesaRow.insertPermission = 'Administration:General';
            TabTipoDespesaRow.readPermission = 'Administration:General';
            TabTipoDespesaRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = TabTipoDespesaRow.Fields || (TabTipoDespesaRow.Fields = {}));
            [
                'CodigoTabTipoDespesa',
                'Descricao',
                'Icone'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TabTipoDespesaRow = Default.TabTipoDespesaRow || (Default.TabTipoDespesaRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoDespesaService;
        (function (TabTipoDespesaService) {
            TabTipoDespesaService.baseUrl = 'Default/TabTipoDespesa';
            var Methods;
            (function (Methods) {
            })(Methods = TabTipoDespesaService.Methods || (TabTipoDespesaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TabTipoDespesaService[x] = function (r, s, o) {
                    return Q.serviceRequest(TabTipoDespesaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TabTipoDespesaService.baseUrl + '/' + x;
            });
        })(TabTipoDespesaService = Default.TabTipoDespesaService || (Default.TabTipoDespesaService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoObjetivoForm = /** @class */ (function (_super) {
            __extends(TabTipoObjetivoForm, _super);
            function TabTipoObjetivoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TabTipoObjetivoForm.formKey = 'Default.TabTipoObjetivo';
            return TabTipoObjetivoForm;
        }(Serenity.PrefixedContext));
        Default.TabTipoObjetivoForm = TabTipoObjetivoForm;
        [,
            ['Descricao', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(TabTipoObjetivoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoObjetivoRow;
        (function (TabTipoObjetivoRow) {
            TabTipoObjetivoRow.idProperty = 'CodigoTabTipoObjetivo';
            TabTipoObjetivoRow.nameProperty = 'Descricao';
            TabTipoObjetivoRow.localTextPrefix = 'Default.TabTipoObjetivo';
            TabTipoObjetivoRow.deletePermission = 'Administration:General';
            TabTipoObjetivoRow.insertPermission = 'Administration:General';
            TabTipoObjetivoRow.readPermission = 'Administration:General';
            TabTipoObjetivoRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = TabTipoObjetivoRow.Fields || (TabTipoObjetivoRow.Fields = {}));
            [
                'CodigoTabTipoObjetivo',
                'Descricao'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TabTipoObjetivoRow = Default.TabTipoObjetivoRow || (Default.TabTipoObjetivoRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoObjetivoService;
        (function (TabTipoObjetivoService) {
            TabTipoObjetivoService.baseUrl = 'Default/TabTipoObjetivo';
            var Methods;
            (function (Methods) {
            })(Methods = TabTipoObjetivoService.Methods || (TabTipoObjetivoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TabTipoObjetivoService[x] = function (r, s, o) {
                    return Q.serviceRequest(TabTipoObjetivoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TabTipoObjetivoService.baseUrl + '/' + x;
            });
        })(TabTipoObjetivoService = Default.TabTipoObjetivoService || (Default.TabTipoObjetivoService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoReceitaForm = /** @class */ (function (_super) {
            __extends(TabTipoReceitaForm, _super);
            function TabTipoReceitaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TabTipoReceitaForm.formKey = 'Default.TabTipoReceita';
            return TabTipoReceitaForm;
        }(Serenity.PrefixedContext));
        Default.TabTipoReceitaForm = TabTipoReceitaForm;
        [,
            ['Descricao', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(TabTipoReceitaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoReceitaRow;
        (function (TabTipoReceitaRow) {
            TabTipoReceitaRow.idProperty = 'CodigoTabTipoReceita';
            TabTipoReceitaRow.nameProperty = 'Descricao';
            TabTipoReceitaRow.localTextPrefix = 'Default.TabTipoReceita';
            TabTipoReceitaRow.deletePermission = 'Administration:General';
            TabTipoReceitaRow.insertPermission = 'Administration:General';
            TabTipoReceitaRow.readPermission = 'Administration:General';
            TabTipoReceitaRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = TabTipoReceitaRow.Fields || (TabTipoReceitaRow.Fields = {}));
            [
                'CodigoTabTipoReceita',
                'Descricao'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TabTipoReceitaRow = Default.TabTipoReceitaRow || (Default.TabTipoReceitaRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoReceitaService;
        (function (TabTipoReceitaService) {
            TabTipoReceitaService.baseUrl = 'Default/TabTipoReceita';
            var Methods;
            (function (Methods) {
            })(Methods = TabTipoReceitaService.Methods || (TabTipoReceitaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TabTipoReceitaService[x] = function (r, s, o) {
                    return Q.serviceRequest(TabTipoReceitaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TabTipoReceitaService.baseUrl + '/' + x;
            });
        })(TabTipoReceitaService = Default.TabTipoReceitaService || (Default.TabTipoReceitaService = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var UserPermissionsRow;
        (function (UserPermissionsRow) {
            UserPermissionsRow.idProperty = 'UserPermissionId';
            UserPermissionsRow.nameProperty = 'PermissionKey';
            UserPermissionsRow.localTextPrefix = 'Default.UserPermissions';
            UserPermissionsRow.deletePermission = 'Administration:General';
            UserPermissionsRow.insertPermission = 'Administration:General';
            UserPermissionsRow.readPermission = 'Administration:General';
            UserPermissionsRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionsRow.Fields || (UserPermissionsRow.Fields = {}));
            [
                'UserPermissionId',
                'UserId',
                'PermissionKey',
                'Granted'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionsRow = Default.UserPermissionsRow || (Default.UserPermissionsRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var UserPreferencesRow;
        (function (UserPreferencesRow) {
            UserPreferencesRow.idProperty = 'UserPreferenceId';
            UserPreferencesRow.nameProperty = 'PreferenceType';
            UserPreferencesRow.localTextPrefix = 'Default.UserPreferences';
            UserPreferencesRow.deletePermission = 'Administration:General';
            UserPreferencesRow.insertPermission = 'Administration:General';
            UserPreferencesRow.readPermission = 'Administration:General';
            UserPreferencesRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferencesRow.Fields || (UserPreferencesRow.Fields = {}));
            [
                'UserPreferenceId',
                'UserId',
                'PreferenceType',
                'Name',
                'Value'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferencesRow = Default.UserPreferencesRow || (Default.UserPreferencesRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var UserRolesRow;
        (function (UserRolesRow) {
            UserRolesRow.idProperty = 'UserRoleId';
            UserRolesRow.localTextPrefix = 'Default.UserRoles';
            UserRolesRow.deletePermission = 'Administration:General';
            UserRolesRow.insertPermission = 'Administration:General';
            UserRolesRow.readPermission = 'Administration:General';
            UserRolesRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = UserRolesRow.Fields || (UserRolesRow.Fields = {}));
            [
                'UserRoleId',
                'UserId',
                'RoleId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRolesRow = Default.UserRolesRow || (Default.UserRolesRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var UsersRow;
        (function (UsersRow) {
            UsersRow.idProperty = 'UserId';
            UsersRow.nameProperty = 'Username';
            UsersRow.localTextPrefix = 'Default.Users';
            UsersRow.deletePermission = 'Administration:General';
            UsersRow.insertPermission = 'Administration:General';
            UsersRow.readPermission = 'Administration:General';
            UsersRow.updatePermission = 'Administration:General';
            var Fields;
            (function (Fields) {
            })(Fields = UsersRow.Fields || (UsersRow.Fields = {}));
            [
                'UserId',
                'Username',
                'DisplayName',
                'Email',
                'Source',
                'PasswordHash',
                'PasswordSalt',
                'LastDirectoryUpdate',
                'UserImage',
                'InsertDate',
                'InsertUserId',
                'UpdateDate',
                'UpdateUserId',
                'IsActive',
                'UsuarioId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UsersRow = Default.UsersRow || (Default.UsersRow = {}));
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Texts;
    (function (Texts) {
        WebMyMoney['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Northwind: { Category: { CategoryID: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Customer: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerID: 1, Email: 1, Fax: 1, ID: 1, LastContactDate: 1, LastContactedBy: 1, NoteList: 1, Phone: 1, PostalCode: 1, Region: 1, Representatives: 1, SendBulletin: 1 }, CustomerCustomerDemo: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, CustomerTypeCustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDemographic: { CustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDetails: { Email: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, DragDropSample: { Id: 1, ParentId: 1, Title: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, EmployeeTerritory: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeID: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryID: 1, TerritoryRegionID: 1, TerritoryTerritoryDescription: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1 }, OrderDetail: { DetailID: 1, Discount: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, Discontinued: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Region: { RegionDescription: 1, RegionID: 1 }, SalesByCategory: { CategoryId: 1, CategoryName: 1, ProductName: 1, ProductSales: 1 }, Shipper: { CompanyName: 1, Phone: 1, ShipperID: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1 }, Territory: { ID: 1, RegionDescription: 1, RegionID: 1, TerritoryDescription: 1, TerritoryID: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, NorthwindPhone: 1, NorthwindPhoneMultiple: 1, SavePrimaryKeyError: 1 } });
    })(Texts = WebMyMoney.Texts || (WebMyMoney.Texts = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = WebMyMoney.Authorization || (WebMyMoney.Authorization = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = WebMyMoney.Administration || (WebMyMoney.Administration = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = WebMyMoney.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = WebMyMoney.LanguageList || (WebMyMoney.LanguageList = {}));
})(WebMyMoney || (WebMyMoney = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var WebMyMoney;
(function (WebMyMoney) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('WebMyMoney');
        Serenity.EntityDialog.defaultLanguageList = WebMyMoney.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = WebMyMoney.ScriptInitialization || (WebMyMoney.ScriptInitialization = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    WebMyMoney.BasicProgressDialog = BasicProgressDialog;
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new WebMyMoney.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = WebMyMoney.DialogUtils || (WebMyMoney.DialogUtils = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    WebMyMoney.StaticTextBlock = StaticTextBlock;
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = WebMyMoney.Common || (WebMyMoney.Common = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadAssinanteDialog = /** @class */ (function (_super) {
            __extends(CadAssinanteDialog, _super);
            function CadAssinanteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CadAssinanteForm(_this.idPrefix);
                return _this;
            }
            CadAssinanteDialog.prototype.getFormKey = function () { return Default.CadAssinanteForm.formKey; };
            CadAssinanteDialog.prototype.getIdProperty = function () { return Default.CadAssinanteRow.idProperty; };
            CadAssinanteDialog.prototype.getLocalTextPrefix = function () { return Default.CadAssinanteRow.localTextPrefix; };
            CadAssinanteDialog.prototype.getNameProperty = function () { return Default.CadAssinanteRow.nameProperty; };
            CadAssinanteDialog.prototype.getService = function () { return Default.CadAssinanteService.baseUrl; };
            CadAssinanteDialog.prototype.getDeletePermission = function () { return Default.CadAssinanteRow.deletePermission; };
            CadAssinanteDialog.prototype.getInsertPermission = function () { return Default.CadAssinanteRow.insertPermission; };
            CadAssinanteDialog.prototype.getUpdatePermission = function () { return Default.CadAssinanteRow.updatePermission; };
            CadAssinanteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CadAssinanteDialog);
            return CadAssinanteDialog;
        }(Serenity.EntityDialog));
        Default.CadAssinanteDialog = CadAssinanteDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadAssinanteGrid = /** @class */ (function (_super) {
            __extends(CadAssinanteGrid, _super);
            function CadAssinanteGrid(container) {
                return _super.call(this, container) || this;
            }
            CadAssinanteGrid.prototype.getColumnsKey = function () { return 'Default.CadAssinante'; };
            CadAssinanteGrid.prototype.getDialogType = function () { return Default.CadAssinanteDialog; };
            CadAssinanteGrid.prototype.getIdProperty = function () { return Default.CadAssinanteRow.idProperty; };
            CadAssinanteGrid.prototype.getInsertPermission = function () { return Default.CadAssinanteRow.insertPermission; };
            CadAssinanteGrid.prototype.getLocalTextPrefix = function () { return Default.CadAssinanteRow.localTextPrefix; };
            CadAssinanteGrid.prototype.getService = function () { return Default.CadAssinanteService.baseUrl; };
            CadAssinanteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CadAssinanteGrid);
            return CadAssinanteGrid;
        }(Serenity.EntityGrid));
        Default.CadAssinanteGrid = CadAssinanteGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadCartaoCreditoDialog = /** @class */ (function (_super) {
            __extends(CadCartaoCreditoDialog, _super);
            function CadCartaoCreditoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CadCartaoCreditoForm(_this.idPrefix);
                return _this;
            }
            CadCartaoCreditoDialog.prototype.getFormKey = function () { return Default.CadCartaoCreditoForm.formKey; };
            CadCartaoCreditoDialog.prototype.getIdProperty = function () { return Default.CadCartaoCreditoRow.idProperty; };
            CadCartaoCreditoDialog.prototype.getLocalTextPrefix = function () { return Default.CadCartaoCreditoRow.localTextPrefix; };
            CadCartaoCreditoDialog.prototype.getNameProperty = function () { return Default.CadCartaoCreditoRow.nameProperty; };
            CadCartaoCreditoDialog.prototype.getService = function () { return Default.CadCartaoCreditoService.baseUrl; };
            CadCartaoCreditoDialog.prototype.getDeletePermission = function () { return Default.CadCartaoCreditoRow.deletePermission; };
            CadCartaoCreditoDialog.prototype.getInsertPermission = function () { return Default.CadCartaoCreditoRow.insertPermission; };
            CadCartaoCreditoDialog.prototype.getUpdatePermission = function () { return Default.CadCartaoCreditoRow.updatePermission; };
            CadCartaoCreditoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CadCartaoCreditoDialog);
            return CadCartaoCreditoDialog;
        }(Serenity.EntityDialog));
        Default.CadCartaoCreditoDialog = CadCartaoCreditoDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadCartaoCreditoGrid = /** @class */ (function (_super) {
            __extends(CadCartaoCreditoGrid, _super);
            function CadCartaoCreditoGrid(container) {
                return _super.call(this, container) || this;
            }
            CadCartaoCreditoGrid.prototype.getColumnsKey = function () { return 'Default.CadCartaoCredito'; };
            CadCartaoCreditoGrid.prototype.getDialogType = function () { return Default.CadCartaoCreditoDialog; };
            CadCartaoCreditoGrid.prototype.getIdProperty = function () { return Default.CadCartaoCreditoRow.idProperty; };
            CadCartaoCreditoGrid.prototype.getInsertPermission = function () { return Default.CadCartaoCreditoRow.insertPermission; };
            CadCartaoCreditoGrid.prototype.getLocalTextPrefix = function () { return Default.CadCartaoCreditoRow.localTextPrefix; };
            CadCartaoCreditoGrid.prototype.getService = function () { return Default.CadCartaoCreditoService.baseUrl; };
            CadCartaoCreditoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CadCartaoCreditoGrid);
            return CadCartaoCreditoGrid;
        }(Serenity.EntityGrid));
        Default.CadCartaoCreditoGrid = CadCartaoCreditoGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadContaDialog = /** @class */ (function (_super) {
            __extends(CadContaDialog, _super);
            function CadContaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CadContaForm(_this.idPrefix);
                return _this;
            }
            CadContaDialog.prototype.getFormKey = function () { return Default.CadContaForm.formKey; };
            CadContaDialog.prototype.getIdProperty = function () { return Default.CadContaRow.idProperty; };
            CadContaDialog.prototype.getLocalTextPrefix = function () { return Default.CadContaRow.localTextPrefix; };
            CadContaDialog.prototype.getNameProperty = function () { return Default.CadContaRow.nameProperty; };
            CadContaDialog.prototype.getService = function () { return Default.CadContaService.baseUrl; };
            CadContaDialog.prototype.getDeletePermission = function () { return Default.CadContaRow.deletePermission; };
            CadContaDialog.prototype.getInsertPermission = function () { return Default.CadContaRow.insertPermission; };
            CadContaDialog.prototype.getUpdatePermission = function () { return Default.CadContaRow.updatePermission; };
            CadContaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CadContaDialog);
            return CadContaDialog;
        }(Serenity.EntityDialog));
        Default.CadContaDialog = CadContaDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadContaGrid = /** @class */ (function (_super) {
            __extends(CadContaGrid, _super);
            function CadContaGrid(container) {
                return _super.call(this, container) || this;
            }
            CadContaGrid.prototype.getColumnsKey = function () { return 'Default.CadConta'; };
            CadContaGrid.prototype.getDialogType = function () { return Default.CadContaDialog; };
            CadContaGrid.prototype.getIdProperty = function () { return Default.CadContaRow.idProperty; };
            CadContaGrid.prototype.getInsertPermission = function () { return Default.CadContaRow.insertPermission; };
            CadContaGrid.prototype.getLocalTextPrefix = function () { return Default.CadContaRow.localTextPrefix; };
            CadContaGrid.prototype.getService = function () { return Default.CadContaService.baseUrl; };
            CadContaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CadContaGrid);
            return CadContaGrid;
        }(Serenity.EntityGrid));
        Default.CadContaGrid = CadContaGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadDespesaDialog = /** @class */ (function (_super) {
            __extends(CadDespesaDialog, _super);
            function CadDespesaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CadDespesaForm(_this.idPrefix);
                return _this;
            }
            CadDespesaDialog.prototype.getFormKey = function () { return Default.CadDespesaForm.formKey; };
            CadDespesaDialog.prototype.getIdProperty = function () { return Default.CadDespesaRow.idProperty; };
            CadDespesaDialog.prototype.getLocalTextPrefix = function () { return Default.CadDespesaRow.localTextPrefix; };
            CadDespesaDialog.prototype.getNameProperty = function () { return Default.CadDespesaRow.nameProperty; };
            CadDespesaDialog.prototype.getService = function () { return Default.CadDespesaService.baseUrl; };
            CadDespesaDialog.prototype.getDeletePermission = function () { return Default.CadDespesaRow.deletePermission; };
            CadDespesaDialog.prototype.getInsertPermission = function () { return Default.CadDespesaRow.insertPermission; };
            CadDespesaDialog.prototype.getUpdatePermission = function () { return Default.CadDespesaRow.updatePermission; };
            CadDespesaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CadDespesaDialog);
            return CadDespesaDialog;
        }(Serenity.EntityDialog));
        Default.CadDespesaDialog = CadDespesaDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadDespesaGrid = /** @class */ (function (_super) {
            __extends(CadDespesaGrid, _super);
            function CadDespesaGrid(container) {
                return _super.call(this, container) || this;
            }
            CadDespesaGrid.prototype.getColumnsKey = function () { return 'Default.CadDespesa'; };
            CadDespesaGrid.prototype.getDialogType = function () { return Default.CadDespesaDialog; };
            CadDespesaGrid.prototype.getIdProperty = function () { return Default.CadDespesaRow.idProperty; };
            CadDespesaGrid.prototype.getInsertPermission = function () { return Default.CadDespesaRow.insertPermission; };
            CadDespesaGrid.prototype.getLocalTextPrefix = function () { return Default.CadDespesaRow.localTextPrefix; };
            CadDespesaGrid.prototype.getService = function () { return Default.CadDespesaService.baseUrl; };
            CadDespesaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CadDespesaGrid);
            return CadDespesaGrid;
        }(Serenity.EntityGrid));
        Default.CadDespesaGrid = CadDespesaGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadGrupoFamiliarDialog = /** @class */ (function (_super) {
            __extends(CadGrupoFamiliarDialog, _super);
            function CadGrupoFamiliarDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CadGrupoFamiliarForm(_this.idPrefix);
                return _this;
            }
            CadGrupoFamiliarDialog.prototype.getFormKey = function () { return Default.CadGrupoFamiliarForm.formKey; };
            CadGrupoFamiliarDialog.prototype.getIdProperty = function () { return Default.CadGrupoFamiliarRow.idProperty; };
            CadGrupoFamiliarDialog.prototype.getLocalTextPrefix = function () { return Default.CadGrupoFamiliarRow.localTextPrefix; };
            CadGrupoFamiliarDialog.prototype.getNameProperty = function () { return Default.CadGrupoFamiliarRow.nameProperty; };
            CadGrupoFamiliarDialog.prototype.getService = function () { return Default.CadGrupoFamiliarService.baseUrl; };
            CadGrupoFamiliarDialog.prototype.getDeletePermission = function () { return Default.CadGrupoFamiliarRow.deletePermission; };
            CadGrupoFamiliarDialog.prototype.getInsertPermission = function () { return Default.CadGrupoFamiliarRow.insertPermission; };
            CadGrupoFamiliarDialog.prototype.getUpdatePermission = function () { return Default.CadGrupoFamiliarRow.updatePermission; };
            CadGrupoFamiliarDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CadGrupoFamiliarDialog);
            return CadGrupoFamiliarDialog;
        }(Serenity.EntityDialog));
        Default.CadGrupoFamiliarDialog = CadGrupoFamiliarDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadGrupoFamiliarGrid = /** @class */ (function (_super) {
            __extends(CadGrupoFamiliarGrid, _super);
            function CadGrupoFamiliarGrid(container) {
                return _super.call(this, container) || this;
            }
            CadGrupoFamiliarGrid.prototype.getColumnsKey = function () { return 'Default.CadGrupoFamiliar'; };
            CadGrupoFamiliarGrid.prototype.getDialogType = function () { return Default.CadGrupoFamiliarDialog; };
            CadGrupoFamiliarGrid.prototype.getIdProperty = function () { return Default.CadGrupoFamiliarRow.idProperty; };
            CadGrupoFamiliarGrid.prototype.getInsertPermission = function () { return Default.CadGrupoFamiliarRow.insertPermission; };
            CadGrupoFamiliarGrid.prototype.getLocalTextPrefix = function () { return Default.CadGrupoFamiliarRow.localTextPrefix; };
            CadGrupoFamiliarGrid.prototype.getService = function () { return Default.CadGrupoFamiliarService.baseUrl; };
            CadGrupoFamiliarGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CadGrupoFamiliarGrid);
            return CadGrupoFamiliarGrid;
        }(Serenity.EntityGrid));
        Default.CadGrupoFamiliarGrid = CadGrupoFamiliarGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadObjetivoDialog = /** @class */ (function (_super) {
            __extends(CadObjetivoDialog, _super);
            function CadObjetivoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CadObjetivoForm(_this.idPrefix);
                return _this;
            }
            CadObjetivoDialog.prototype.getFormKey = function () { return Default.CadObjetivoForm.formKey; };
            CadObjetivoDialog.prototype.getIdProperty = function () { return Default.CadObjetivoRow.idProperty; };
            CadObjetivoDialog.prototype.getLocalTextPrefix = function () { return Default.CadObjetivoRow.localTextPrefix; };
            CadObjetivoDialog.prototype.getNameProperty = function () { return Default.CadObjetivoRow.nameProperty; };
            CadObjetivoDialog.prototype.getService = function () { return Default.CadObjetivoService.baseUrl; };
            CadObjetivoDialog.prototype.getDeletePermission = function () { return Default.CadObjetivoRow.deletePermission; };
            CadObjetivoDialog.prototype.getInsertPermission = function () { return Default.CadObjetivoRow.insertPermission; };
            CadObjetivoDialog.prototype.getUpdatePermission = function () { return Default.CadObjetivoRow.updatePermission; };
            CadObjetivoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CadObjetivoDialog);
            return CadObjetivoDialog;
        }(Serenity.EntityDialog));
        Default.CadObjetivoDialog = CadObjetivoDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadObjetivoGrid = /** @class */ (function (_super) {
            __extends(CadObjetivoGrid, _super);
            function CadObjetivoGrid(container) {
                return _super.call(this, container) || this;
            }
            CadObjetivoGrid.prototype.getColumnsKey = function () { return 'Default.CadObjetivo'; };
            CadObjetivoGrid.prototype.getDialogType = function () { return Default.CadObjetivoDialog; };
            CadObjetivoGrid.prototype.getIdProperty = function () { return Default.CadObjetivoRow.idProperty; };
            CadObjetivoGrid.prototype.getInsertPermission = function () { return Default.CadObjetivoRow.insertPermission; };
            CadObjetivoGrid.prototype.getLocalTextPrefix = function () { return Default.CadObjetivoRow.localTextPrefix; };
            CadObjetivoGrid.prototype.getService = function () { return Default.CadObjetivoService.baseUrl; };
            CadObjetivoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CadObjetivoGrid);
            return CadObjetivoGrid;
        }(Serenity.EntityGrid));
        Default.CadObjetivoGrid = CadObjetivoGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadReceitaDialog = /** @class */ (function (_super) {
            __extends(CadReceitaDialog, _super);
            function CadReceitaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CadReceitaForm(_this.idPrefix);
                return _this;
            }
            CadReceitaDialog.prototype.getFormKey = function () { return Default.CadReceitaForm.formKey; };
            CadReceitaDialog.prototype.getIdProperty = function () { return Default.CadReceitaRow.idProperty; };
            CadReceitaDialog.prototype.getLocalTextPrefix = function () { return Default.CadReceitaRow.localTextPrefix; };
            CadReceitaDialog.prototype.getNameProperty = function () { return Default.CadReceitaRow.nameProperty; };
            CadReceitaDialog.prototype.getService = function () { return Default.CadReceitaService.baseUrl; };
            CadReceitaDialog.prototype.getDeletePermission = function () { return Default.CadReceitaRow.deletePermission; };
            CadReceitaDialog.prototype.getInsertPermission = function () { return Default.CadReceitaRow.insertPermission; };
            CadReceitaDialog.prototype.getUpdatePermission = function () { return Default.CadReceitaRow.updatePermission; };
            CadReceitaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CadReceitaDialog);
            return CadReceitaDialog;
        }(Serenity.EntityDialog));
        Default.CadReceitaDialog = CadReceitaDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadReceitaGrid = /** @class */ (function (_super) {
            __extends(CadReceitaGrid, _super);
            function CadReceitaGrid(container) {
                return _super.call(this, container) || this;
            }
            CadReceitaGrid.prototype.getColumnsKey = function () { return 'Default.CadReceita'; };
            CadReceitaGrid.prototype.getDialogType = function () { return Default.CadReceitaDialog; };
            CadReceitaGrid.prototype.getIdProperty = function () { return Default.CadReceitaRow.idProperty; };
            CadReceitaGrid.prototype.getInsertPermission = function () { return Default.CadReceitaRow.insertPermission; };
            CadReceitaGrid.prototype.getLocalTextPrefix = function () { return Default.CadReceitaRow.localTextPrefix; };
            CadReceitaGrid.prototype.getService = function () { return Default.CadReceitaService.baseUrl; };
            CadReceitaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CadReceitaGrid);
            return CadReceitaGrid;
        }(Serenity.EntityGrid));
        Default.CadReceitaGrid = CadReceitaGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadUsuarioDialog = /** @class */ (function (_super) {
            __extends(CadUsuarioDialog, _super);
            function CadUsuarioDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CadUsuarioForm(_this.idPrefix);
                return _this;
            }
            CadUsuarioDialog.prototype.getFormKey = function () { return Default.CadUsuarioForm.formKey; };
            CadUsuarioDialog.prototype.getIdProperty = function () { return Default.CadUsuarioRow.idProperty; };
            CadUsuarioDialog.prototype.getLocalTextPrefix = function () { return Default.CadUsuarioRow.localTextPrefix; };
            CadUsuarioDialog.prototype.getNameProperty = function () { return Default.CadUsuarioRow.nameProperty; };
            CadUsuarioDialog.prototype.getService = function () { return Default.CadUsuarioService.baseUrl; };
            CadUsuarioDialog.prototype.getDeletePermission = function () { return Default.CadUsuarioRow.deletePermission; };
            CadUsuarioDialog.prototype.getInsertPermission = function () { return Default.CadUsuarioRow.insertPermission; };
            CadUsuarioDialog.prototype.getUpdatePermission = function () { return Default.CadUsuarioRow.updatePermission; };
            CadUsuarioDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CadUsuarioDialog);
            return CadUsuarioDialog;
        }(Serenity.EntityDialog));
        Default.CadUsuarioDialog = CadUsuarioDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var CadUsuarioGrid = /** @class */ (function (_super) {
            __extends(CadUsuarioGrid, _super);
            function CadUsuarioGrid(container) {
                return _super.call(this, container) || this;
            }
            CadUsuarioGrid.prototype.getColumnsKey = function () { return 'Default.CadUsuario'; };
            CadUsuarioGrid.prototype.getDialogType = function () { return Default.CadUsuarioDialog; };
            CadUsuarioGrid.prototype.getIdProperty = function () { return Default.CadUsuarioRow.idProperty; };
            CadUsuarioGrid.prototype.getInsertPermission = function () { return Default.CadUsuarioRow.insertPermission; };
            CadUsuarioGrid.prototype.getLocalTextPrefix = function () { return Default.CadUsuarioRow.localTextPrefix; };
            CadUsuarioGrid.prototype.getService = function () { return Default.CadUsuarioService.baseUrl; };
            CadUsuarioGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CadUsuarioGrid);
            return CadUsuarioGrid;
        }(Serenity.EntityGrid));
        Default.CadUsuarioGrid = CadUsuarioGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoCartaoCreditoDialog = /** @class */ (function (_super) {
            __extends(TabTipoCartaoCreditoDialog, _super);
            function TabTipoCartaoCreditoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TabTipoCartaoCreditoForm(_this.idPrefix);
                return _this;
            }
            TabTipoCartaoCreditoDialog.prototype.getFormKey = function () { return Default.TabTipoCartaoCreditoForm.formKey; };
            TabTipoCartaoCreditoDialog.prototype.getIdProperty = function () { return Default.TabTipoCartaoCreditoRow.idProperty; };
            TabTipoCartaoCreditoDialog.prototype.getLocalTextPrefix = function () { return Default.TabTipoCartaoCreditoRow.localTextPrefix; };
            TabTipoCartaoCreditoDialog.prototype.getNameProperty = function () { return Default.TabTipoCartaoCreditoRow.nameProperty; };
            TabTipoCartaoCreditoDialog.prototype.getService = function () { return Default.TabTipoCartaoCreditoService.baseUrl; };
            TabTipoCartaoCreditoDialog.prototype.getDeletePermission = function () { return Default.TabTipoCartaoCreditoRow.deletePermission; };
            TabTipoCartaoCreditoDialog.prototype.getInsertPermission = function () { return Default.TabTipoCartaoCreditoRow.insertPermission; };
            TabTipoCartaoCreditoDialog.prototype.getUpdatePermission = function () { return Default.TabTipoCartaoCreditoRow.updatePermission; };
            TabTipoCartaoCreditoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoCartaoCreditoDialog);
            return TabTipoCartaoCreditoDialog;
        }(Serenity.EntityDialog));
        Default.TabTipoCartaoCreditoDialog = TabTipoCartaoCreditoDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoCartaoCreditoGrid = /** @class */ (function (_super) {
            __extends(TabTipoCartaoCreditoGrid, _super);
            function TabTipoCartaoCreditoGrid(container) {
                return _super.call(this, container) || this;
            }
            TabTipoCartaoCreditoGrid.prototype.getColumnsKey = function () { return 'Default.TabTipoCartaoCredito'; };
            TabTipoCartaoCreditoGrid.prototype.getDialogType = function () { return Default.TabTipoCartaoCreditoDialog; };
            TabTipoCartaoCreditoGrid.prototype.getIdProperty = function () { return Default.TabTipoCartaoCreditoRow.idProperty; };
            TabTipoCartaoCreditoGrid.prototype.getInsertPermission = function () { return Default.TabTipoCartaoCreditoRow.insertPermission; };
            TabTipoCartaoCreditoGrid.prototype.getLocalTextPrefix = function () { return Default.TabTipoCartaoCreditoRow.localTextPrefix; };
            TabTipoCartaoCreditoGrid.prototype.getService = function () { return Default.TabTipoCartaoCreditoService.baseUrl; };
            TabTipoCartaoCreditoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoCartaoCreditoGrid);
            return TabTipoCartaoCreditoGrid;
        }(Serenity.EntityGrid));
        Default.TabTipoCartaoCreditoGrid = TabTipoCartaoCreditoGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoContaDialog = /** @class */ (function (_super) {
            __extends(TabTipoContaDialog, _super);
            function TabTipoContaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TabTipoContaForm(_this.idPrefix);
                return _this;
            }
            TabTipoContaDialog.prototype.getFormKey = function () { return Default.TabTipoContaForm.formKey; };
            TabTipoContaDialog.prototype.getIdProperty = function () { return Default.TabTipoContaRow.idProperty; };
            TabTipoContaDialog.prototype.getLocalTextPrefix = function () { return Default.TabTipoContaRow.localTextPrefix; };
            TabTipoContaDialog.prototype.getNameProperty = function () { return Default.TabTipoContaRow.nameProperty; };
            TabTipoContaDialog.prototype.getService = function () { return Default.TabTipoContaService.baseUrl; };
            TabTipoContaDialog.prototype.getDeletePermission = function () { return Default.TabTipoContaRow.deletePermission; };
            TabTipoContaDialog.prototype.getInsertPermission = function () { return Default.TabTipoContaRow.insertPermission; };
            TabTipoContaDialog.prototype.getUpdatePermission = function () { return Default.TabTipoContaRow.updatePermission; };
            TabTipoContaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoContaDialog);
            return TabTipoContaDialog;
        }(Serenity.EntityDialog));
        Default.TabTipoContaDialog = TabTipoContaDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoContaGrid = /** @class */ (function (_super) {
            __extends(TabTipoContaGrid, _super);
            function TabTipoContaGrid(container) {
                return _super.call(this, container) || this;
            }
            TabTipoContaGrid.prototype.getColumnsKey = function () { return 'Default.TabTipoConta'; };
            TabTipoContaGrid.prototype.getDialogType = function () { return Default.TabTipoContaDialog; };
            TabTipoContaGrid.prototype.getIdProperty = function () { return Default.TabTipoContaRow.idProperty; };
            TabTipoContaGrid.prototype.getInsertPermission = function () { return Default.TabTipoContaRow.insertPermission; };
            TabTipoContaGrid.prototype.getLocalTextPrefix = function () { return Default.TabTipoContaRow.localTextPrefix; };
            TabTipoContaGrid.prototype.getService = function () { return Default.TabTipoContaService.baseUrl; };
            TabTipoContaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoContaGrid);
            return TabTipoContaGrid;
        }(Serenity.EntityGrid));
        Default.TabTipoContaGrid = TabTipoContaGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoDespesaDialog = /** @class */ (function (_super) {
            __extends(TabTipoDespesaDialog, _super);
            function TabTipoDespesaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TabTipoDespesaForm(_this.idPrefix);
                return _this;
            }
            TabTipoDespesaDialog.prototype.getFormKey = function () { return Default.TabTipoDespesaForm.formKey; };
            TabTipoDespesaDialog.prototype.getIdProperty = function () { return Default.TabTipoDespesaRow.idProperty; };
            TabTipoDespesaDialog.prototype.getLocalTextPrefix = function () { return Default.TabTipoDespesaRow.localTextPrefix; };
            TabTipoDespesaDialog.prototype.getNameProperty = function () { return Default.TabTipoDespesaRow.nameProperty; };
            TabTipoDespesaDialog.prototype.getService = function () { return Default.TabTipoDespesaService.baseUrl; };
            TabTipoDespesaDialog.prototype.getDeletePermission = function () { return Default.TabTipoDespesaRow.deletePermission; };
            TabTipoDespesaDialog.prototype.getInsertPermission = function () { return Default.TabTipoDespesaRow.insertPermission; };
            TabTipoDespesaDialog.prototype.getUpdatePermission = function () { return Default.TabTipoDespesaRow.updatePermission; };
            TabTipoDespesaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoDespesaDialog);
            return TabTipoDespesaDialog;
        }(Serenity.EntityDialog));
        Default.TabTipoDespesaDialog = TabTipoDespesaDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoDespesaGrid = /** @class */ (function (_super) {
            __extends(TabTipoDespesaGrid, _super);
            function TabTipoDespesaGrid(container) {
                return _super.call(this, container) || this;
            }
            TabTipoDespesaGrid.prototype.getColumnsKey = function () { return 'Default.TabTipoDespesa'; };
            TabTipoDespesaGrid.prototype.getDialogType = function () { return Default.TabTipoDespesaDialog; };
            TabTipoDespesaGrid.prototype.getIdProperty = function () { return Default.TabTipoDespesaRow.idProperty; };
            TabTipoDespesaGrid.prototype.getInsertPermission = function () { return Default.TabTipoDespesaRow.insertPermission; };
            TabTipoDespesaGrid.prototype.getLocalTextPrefix = function () { return Default.TabTipoDespesaRow.localTextPrefix; };
            TabTipoDespesaGrid.prototype.getService = function () { return Default.TabTipoDespesaService.baseUrl; };
            TabTipoDespesaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoDespesaGrid);
            return TabTipoDespesaGrid;
        }(Serenity.EntityGrid));
        Default.TabTipoDespesaGrid = TabTipoDespesaGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoObjetivoDialog = /** @class */ (function (_super) {
            __extends(TabTipoObjetivoDialog, _super);
            function TabTipoObjetivoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TabTipoObjetivoForm(_this.idPrefix);
                return _this;
            }
            TabTipoObjetivoDialog.prototype.getFormKey = function () { return Default.TabTipoObjetivoForm.formKey; };
            TabTipoObjetivoDialog.prototype.getIdProperty = function () { return Default.TabTipoObjetivoRow.idProperty; };
            TabTipoObjetivoDialog.prototype.getLocalTextPrefix = function () { return Default.TabTipoObjetivoRow.localTextPrefix; };
            TabTipoObjetivoDialog.prototype.getNameProperty = function () { return Default.TabTipoObjetivoRow.nameProperty; };
            TabTipoObjetivoDialog.prototype.getService = function () { return Default.TabTipoObjetivoService.baseUrl; };
            TabTipoObjetivoDialog.prototype.getDeletePermission = function () { return Default.TabTipoObjetivoRow.deletePermission; };
            TabTipoObjetivoDialog.prototype.getInsertPermission = function () { return Default.TabTipoObjetivoRow.insertPermission; };
            TabTipoObjetivoDialog.prototype.getUpdatePermission = function () { return Default.TabTipoObjetivoRow.updatePermission; };
            TabTipoObjetivoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoObjetivoDialog);
            return TabTipoObjetivoDialog;
        }(Serenity.EntityDialog));
        Default.TabTipoObjetivoDialog = TabTipoObjetivoDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoObjetivoGrid = /** @class */ (function (_super) {
            __extends(TabTipoObjetivoGrid, _super);
            function TabTipoObjetivoGrid(container) {
                return _super.call(this, container) || this;
            }
            TabTipoObjetivoGrid.prototype.getColumnsKey = function () { return 'Default.TabTipoObjetivo'; };
            TabTipoObjetivoGrid.prototype.getDialogType = function () { return Default.TabTipoObjetivoDialog; };
            TabTipoObjetivoGrid.prototype.getIdProperty = function () { return Default.TabTipoObjetivoRow.idProperty; };
            TabTipoObjetivoGrid.prototype.getInsertPermission = function () { return Default.TabTipoObjetivoRow.insertPermission; };
            TabTipoObjetivoGrid.prototype.getLocalTextPrefix = function () { return Default.TabTipoObjetivoRow.localTextPrefix; };
            TabTipoObjetivoGrid.prototype.getService = function () { return Default.TabTipoObjetivoService.baseUrl; };
            TabTipoObjetivoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoObjetivoGrid);
            return TabTipoObjetivoGrid;
        }(Serenity.EntityGrid));
        Default.TabTipoObjetivoGrid = TabTipoObjetivoGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoReceitaDialog = /** @class */ (function (_super) {
            __extends(TabTipoReceitaDialog, _super);
            function TabTipoReceitaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TabTipoReceitaForm(_this.idPrefix);
                return _this;
            }
            TabTipoReceitaDialog.prototype.getFormKey = function () { return Default.TabTipoReceitaForm.formKey; };
            TabTipoReceitaDialog.prototype.getIdProperty = function () { return Default.TabTipoReceitaRow.idProperty; };
            TabTipoReceitaDialog.prototype.getLocalTextPrefix = function () { return Default.TabTipoReceitaRow.localTextPrefix; };
            TabTipoReceitaDialog.prototype.getNameProperty = function () { return Default.TabTipoReceitaRow.nameProperty; };
            TabTipoReceitaDialog.prototype.getService = function () { return Default.TabTipoReceitaService.baseUrl; };
            TabTipoReceitaDialog.prototype.getDeletePermission = function () { return Default.TabTipoReceitaRow.deletePermission; };
            TabTipoReceitaDialog.prototype.getInsertPermission = function () { return Default.TabTipoReceitaRow.insertPermission; };
            TabTipoReceitaDialog.prototype.getUpdatePermission = function () { return Default.TabTipoReceitaRow.updatePermission; };
            TabTipoReceitaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoReceitaDialog);
            return TabTipoReceitaDialog;
        }(Serenity.EntityDialog));
        Default.TabTipoReceitaDialog = TabTipoReceitaDialog;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Default;
    (function (Default) {
        var TabTipoReceitaGrid = /** @class */ (function (_super) {
            __extends(TabTipoReceitaGrid, _super);
            function TabTipoReceitaGrid(container) {
                return _super.call(this, container) || this;
            }
            TabTipoReceitaGrid.prototype.getColumnsKey = function () { return 'Default.TabTipoReceita'; };
            TabTipoReceitaGrid.prototype.getDialogType = function () { return Default.TabTipoReceitaDialog; };
            TabTipoReceitaGrid.prototype.getIdProperty = function () { return Default.TabTipoReceitaRow.idProperty; };
            TabTipoReceitaGrid.prototype.getInsertPermission = function () { return Default.TabTipoReceitaRow.insertPermission; };
            TabTipoReceitaGrid.prototype.getLocalTextPrefix = function () { return Default.TabTipoReceitaRow.localTextPrefix; };
            TabTipoReceitaGrid.prototype.getService = function () { return Default.TabTipoReceitaService.baseUrl; };
            TabTipoReceitaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TabTipoReceitaGrid);
            return TabTipoReceitaGrid;
        }(Serenity.EntityGrid));
        Default.TabTipoReceitaGrid = TabTipoReceitaGrid;
    })(Default = WebMyMoney.Default || (WebMyMoney.Default = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
var WebMyMoney;
(function (WebMyMoney) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = WebMyMoney.Membership || (WebMyMoney.Membership = {}));
})(WebMyMoney || (WebMyMoney = {}));
//# sourceMappingURL=WebMyMoney.Web.js.map