namespace WebMyMoney.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
                export const UsuarioId: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Default {

            namespace CadAssinante {
                export const Ativo: string;
                export const CadAssinanteId: string;
                export const DataCriacao: string;
                export const QdteGrupoFamiliar: string;
                export const Senha: string;
                export const Telefone: string;
                export const UsarioAdminNome: string;
                export const Username: string;
                export const UsuarioAdminEmail: string;
                export const UsuarioAdminId: string;
            }

            namespace CadCartaoCredito {
                export const Ativo: string;
                export const CadCartaoCreditoId: string;
                export const CadContaAtivo: string;
                export const CadContaCadGrupoFamiliarId: string;
                export const CadContaCadUsuarioId: string;
                export const CadContaCodigoTabTipoConta: string;
                export const CadContaDataInicial: string;
                export const CadContaId: string;
                export const CadContaSaldoAtual: string;
                export const CadContaTitulo: string;
                export const CadContaValorInicial: string;
                export const CadGrupoFamiliarAtivo: string;
                export const CadGrupoFamiliarCadAssinanteId: string;
                export const CadGrupoFamiliarCodigoAcesso: string;
                export const CadGrupoFamiliarDataCriacao: string;
                export const CadGrupoFamiliarId: string;
                export const CadGrupoFamiliarQdteUsuarios: string;
                export const CadUsuarioAtivo: string;
                export const CadUsuarioCadGrupoFamiliarId: string;
                export const CadUsuarioDataCriacao: string;
                export const CadUsuarioEmail: string;
                export const CadUsuarioId: string;
                export const CadUsuarioNome: string;
                export const CadUsuarioTelefone: string;
                export const CadUsuarioUserId: string;
                export const CodigoTabTipoCartaoCredito: string;
                export const CodigoTabTipoCartaoCreditoDescricao: string;
                export const CodigoTabTipoCartaoCreditoIcone: string;
                export const Descricao: string;
                export const DiaFecharFatura: string;
                export const DiaPagarFatura: string;
                export const DiaVencimentofatura: string;
                export const Saldo: string;
                export const Titulo: string;
                export const ValorLimiteAtual: string;
                export const ValorLimiteTotal: string;
            }

            namespace CadConta {
                export const Ativo: string;
                export const CadContaId: string;
                export const CadGrupoFamiliarAtivo: string;
                export const CadGrupoFamiliarCadAssinanteId: string;
                export const CadGrupoFamiliarCodigoAcesso: string;
                export const CadGrupoFamiliarDataCriacao: string;
                export const CadGrupoFamiliarId: string;
                export const CadGrupoFamiliarQdteUsuarios: string;
                export const CadUsuarioAtivo: string;
                export const CadUsuarioCadGrupoFamiliarId: string;
                export const CadUsuarioDataCriacao: string;
                export const CadUsuarioEmail: string;
                export const CadUsuarioId: string;
                export const CadUsuarioNome: string;
                export const CadUsuarioTelefone: string;
                export const CadUsuarioUserId: string;
                export const CodigoTabTipoConta: string;
                export const CodigoTabTipoContaDescricao: string;
                export const DataInicial: string;
                export const SaldoAtual: string;
                export const Titulo: string;
                export const ValorInicial: string;
            }

            namespace CadDespesa {
                export const Ativo: string;
                export const CadContaAtivo: string;
                export const CadContaCadGrupoFamiliarId: string;
                export const CadContaCadUsuarioId: string;
                export const CadContaCodigoTabTipoConta: string;
                export const CadContaDataInicial: string;
                export const CadContaId: string;
                export const CadContaSaldoAtual: string;
                export const CadContaTitulo: string;
                export const CadContaValorInicial: string;
                export const CadDespesaId: string;
                export const CadFaturaCartaoCreditoId: string;
                export const CadGrupoFamiliarAtivo: string;
                export const CadGrupoFamiliarCadAssinanteId: string;
                export const CadGrupoFamiliarCodigoAcesso: string;
                export const CadGrupoFamiliarDataCriacao: string;
                export const CadGrupoFamiliarId: string;
                export const CadGrupoFamiliarQdteUsuarios: string;
                export const CadParticipanteId: string;
                export const CadUsuarioAtivo: string;
                export const CadUsuarioCadGrupoFamiliarId: string;
                export const CadUsuarioDataCriacao: string;
                export const CadUsuarioEmail: string;
                export const CadUsuarioId: string;
                export const CadUsuarioNome: string;
                export const CadUsuarioTelefone: string;
                export const CadUsuarioUserId: string;
                export const CodigoTabTipoDespesa: string;
                export const CodigoTabTipoDespesaDescricao: string;
                export const CodigoTabTipoDespesaIcone: string;
                export const CpfCnpjParticipante: string;
                export const DataCriacao: string;
                export const DataFixaVencimento: string;
                export const DataPagamento: string;
                export const DataVencimento: string;
                export const Descontos: string;
                export const Imposto: string;
                export const IsFixo: string;
                export const IsParcelado: string;
                export const MultasJuros: string;
                export const NomeParticipante: string;
                export const NumParcela: string;
                export const Pago: string;
                export const QdteParcelas: string;
                export const Titulo: string;
                export const ValorTotal: string;
            }

            namespace CadFaturaCartaoCredito {
                export const Ativo: string;
                export const CadCartaoCreditoAtivo: string;
                export const CadCartaoCreditoCadContaId: string;
                export const CadCartaoCreditoCadGrupoFamiliarId: string;
                export const CadCartaoCreditoCadUsuarioId: string;
                export const CadCartaoCreditoCodigoTabTipoCartaoCredito: string;
                export const CadCartaoCreditoDescricao: string;
                export const CadCartaoCreditoDiaFecharFatura: string;
                export const CadCartaoCreditoDiaPagarFatura: string;
                export const CadCartaoCreditoDiaVencimentoFatura: string;
                export const CadCartaoCreditoId: string;
                export const CadCartaoCreditoSaldo: string;
                export const CadCartaoCreditoTitulo: string;
                export const CadCartaoCreditoValorLimiteAtual: string;
                export const CadCartaoCreditoValorLimiteTotal: string;
                export const CadFaturaCartaoCreditoId: string;
                export const DataFechamentoFatura: string;
                export const DataPagamentoFatura: string;
                export const DiaFecharFatura: string;
                export const DiaVencimentoFatura: string;
                export const IsParcelarFatura: string;
                export const MesFaturaVigente: string;
                export const MesVigente: string;
                export const NumParcelasFatura: string;
                export const Pago: string;
                export const SaldoAnterior: string;
                export const ValorParcialFaturaAtual: string;
            }

            namespace CadGrupoFamiliar {
                export const Ativo: string;
                export const CadAssinanteAtivo: string;
                export const CadAssinanteDataCriacao: string;
                export const CadAssinanteId: string;
                export const CadAssinanteQdteGrupoFamiliar: string;
                export const CadAssinanteUsarioAdminNome: string;
                export const CadAssinanteUsuarioAdminEmail: string;
                export const CadAssinanteUsuarioAdminId: string;
                export const CadGrupoFamiliarId: string;
                export const CodigoAcesso: string;
                export const DataCriacao: string;
                export const QdteUsuarios: string;
            }

            namespace CadObjetivo {
                export const Ativo: string;
                export const CadContaAtivo: string;
                export const CadContaCadGrupoFamiliarId: string;
                export const CadContaCadUsuarioId: string;
                export const CadContaCodigoTabTipoConta: string;
                export const CadContaDataInicial: string;
                export const CadContaId: string;
                export const CadContaSaldoAtual: string;
                export const CadContaTitulo: string;
                export const CadContaValorInicial: string;
                export const CadGrupoFamiliarAtivo: string;
                export const CadGrupoFamiliarCadAssinanteId: string;
                export const CadGrupoFamiliarCodigoAcesso: string;
                export const CadGrupoFamiliarDataCriacao: string;
                export const CadGrupoFamiliarId: string;
                export const CadGrupoFamiliarQdteUsuarios: string;
                export const CadObjetivoId: string;
                export const CadUsuarioAtivo: string;
                export const CadUsuarioCadGrupoFamiliarId: string;
                export const CadUsuarioDataCriacao: string;
                export const CadUsuarioEmail: string;
                export const CadUsuarioId: string;
                export const CadUsuarioNome: string;
                export const CadUsuarioTelefone: string;
                export const CadUsuarioUserId: string;
                export const CodigoTabTipoObjetivo: string;
                export const CodigoTabTipoObjetivoDescricao: string;
                export const DataFinal: string;
                export const DataInicial: string;
                export const Descricao: string;
                export const Titulo: string;
                export const ValorAtual: string;
                export const ValorFinal: string;
                export const ValorInicial: string;
            }

            namespace CadParticipante {
                export const Ativo: string;
                export const CadGrupoFamiliarAtivo: string;
                export const CadGrupoFamiliarCadAssinanteId: string;
                export const CadGrupoFamiliarCodigoAcesso: string;
                export const CadGrupoFamiliarDataCriacao: string;
                export const CadGrupoFamiliarId: string;
                export const CadGrupoFamiliarQdteUsuarios: string;
                export const CadParticipanteId: string;
                export const CpfCnpj: string;
                export const NomeRazaoSocial: string;
            }

            namespace CadReceita {
                export const Ativo: string;
                export const CadContaAtivo: string;
                export const CadContaCadGrupoFamiliarId: string;
                export const CadContaCadUsuarioId: string;
                export const CadContaCodigoTabTipoConta: string;
                export const CadContaDataInicial: string;
                export const CadContaId: string;
                export const CadContaSaldoAtual: string;
                export const CadContaTitulo: string;
                export const CadContaValorInicial: string;
                export const CadGrupoFamiliarAtivo: string;
                export const CadGrupoFamiliarCadAssinanteId: string;
                export const CadGrupoFamiliarCodigoAcesso: string;
                export const CadGrupoFamiliarDataCriacao: string;
                export const CadGrupoFamiliarId: string;
                export const CadGrupoFamiliarQdteUsuarios: string;
                export const CadReceitaId: string;
                export const CadUsuarioAtivo: string;
                export const CadUsuarioCadGrupoFamiliarId: string;
                export const CadUsuarioDataCriacao: string;
                export const CadUsuarioEmail: string;
                export const CadUsuarioId: string;
                export const CadUsuarioNome: string;
                export const CadUsuarioTelefone: string;
                export const CadUsuarioUserId: string;
                export const CodigoTabTipoReceita: string;
                export const CodigoTabTipoReceitaDescricao: string;
                export const DataCriacao: string;
                export const DataFixaRecebimento: string;
                export const DataRecebimento: string;
                export const Descricao: string;
                export const Imposto: string;
                export const IsFixo: string;
                export const Juros: string;
                export const Recebido: string;
                export const Rendimento: string;
                export const Titulo: string;
                export const Valor: string;
            }

            namespace CadUsuario {
                export const Ativo: string;
                export const CadGrupoFamiliarAtivo: string;
                export const CadGrupoFamiliarCadAssinanteId: string;
                export const CadGrupoFamiliarCodigoAcesso: string;
                export const CadGrupoFamiliarDataCriacao: string;
                export const CadGrupoFamiliarId: string;
                export const CadGrupoFamiliarQdteUsuarios: string;
                export const CadUsuarioId: string;
                export const DataCriacao: string;
                export const Email: string;
                export const Nome: string;
                export const Telefone: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserSource: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
                export const UserUsuarioId: string;
            }

            namespace TabTipoCartaoCredito {
                export const CodigoTabTipoCartaoCredito: string;
                export const Descricao: string;
                export const Icone: string;
            }

            namespace TabTipoConta {
                export const CodigoTabTipoConta: string;
                export const Descricao: string;
            }

            namespace TabTipoDespesa {
                export const CodigoTabTipoDespesa: string;
                export const Descricao: string;
                export const Icone: string;
            }

            namespace TabTipoObjetivo {
                export const CodigoTabTipoObjetivo: string;
                export const Descricao: string;
            }

            namespace TabTipoReceita {
                export const CodigoTabTipoReceita: string;
                export const Descricao: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    WebMyMoney['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1,UsuarioId:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Default:{CadAssinante:{Ativo:1,CadAssinanteId:1,DataCriacao:1,QdteGrupoFamiliar:1,Senha:1,Telefone:1,UsarioAdminNome:1,Username:1,UsuarioAdminEmail:1,UsuarioAdminId:1},CadCartaoCredito:{Ativo:1,CadCartaoCreditoId:1,CadContaAtivo:1,CadContaCadGrupoFamiliarId:1,CadContaCadUsuarioId:1,CadContaCodigoTabTipoConta:1,CadContaDataInicial:1,CadContaId:1,CadContaSaldoAtual:1,CadContaTitulo:1,CadContaValorInicial:1,CadGrupoFamiliarAtivo:1,CadGrupoFamiliarCadAssinanteId:1,CadGrupoFamiliarCodigoAcesso:1,CadGrupoFamiliarDataCriacao:1,CadGrupoFamiliarId:1,CadGrupoFamiliarQdteUsuarios:1,CadUsuarioAtivo:1,CadUsuarioCadGrupoFamiliarId:1,CadUsuarioDataCriacao:1,CadUsuarioEmail:1,CadUsuarioId:1,CadUsuarioNome:1,CadUsuarioTelefone:1,CadUsuarioUserId:1,CodigoTabTipoCartaoCredito:1,CodigoTabTipoCartaoCreditoDescricao:1,CodigoTabTipoCartaoCreditoIcone:1,Descricao:1,DiaFecharFatura:1,DiaPagarFatura:1,DiaVencimentofatura:1,Saldo:1,Titulo:1,ValorLimiteAtual:1,ValorLimiteTotal:1},CadConta:{Ativo:1,CadContaId:1,CadGrupoFamiliarAtivo:1,CadGrupoFamiliarCadAssinanteId:1,CadGrupoFamiliarCodigoAcesso:1,CadGrupoFamiliarDataCriacao:1,CadGrupoFamiliarId:1,CadGrupoFamiliarQdteUsuarios:1,CadUsuarioAtivo:1,CadUsuarioCadGrupoFamiliarId:1,CadUsuarioDataCriacao:1,CadUsuarioEmail:1,CadUsuarioId:1,CadUsuarioNome:1,CadUsuarioTelefone:1,CadUsuarioUserId:1,CodigoTabTipoConta:1,CodigoTabTipoContaDescricao:1,DataInicial:1,SaldoAtual:1,Titulo:1,ValorInicial:1},CadDespesa:{Ativo:1,CadContaAtivo:1,CadContaCadGrupoFamiliarId:1,CadContaCadUsuarioId:1,CadContaCodigoTabTipoConta:1,CadContaDataInicial:1,CadContaId:1,CadContaSaldoAtual:1,CadContaTitulo:1,CadContaValorInicial:1,CadDespesaId:1,CadFaturaCartaoCreditoId:1,CadGrupoFamiliarAtivo:1,CadGrupoFamiliarCadAssinanteId:1,CadGrupoFamiliarCodigoAcesso:1,CadGrupoFamiliarDataCriacao:1,CadGrupoFamiliarId:1,CadGrupoFamiliarQdteUsuarios:1,CadParticipanteId:1,CadUsuarioAtivo:1,CadUsuarioCadGrupoFamiliarId:1,CadUsuarioDataCriacao:1,CadUsuarioEmail:1,CadUsuarioId:1,CadUsuarioNome:1,CadUsuarioTelefone:1,CadUsuarioUserId:1,CodigoTabTipoDespesa:1,CodigoTabTipoDespesaDescricao:1,CodigoTabTipoDespesaIcone:1,CpfCnpjParticipante:1,DataCriacao:1,DataFixaVencimento:1,DataPagamento:1,DataVencimento:1,Descontos:1,Imposto:1,IsFixo:1,IsParcelado:1,MultasJuros:1,NomeParticipante:1,NumParcela:1,Pago:1,QdteParcelas:1,Titulo:1,ValorTotal:1},CadFaturaCartaoCredito:{Ativo:1,CadCartaoCreditoAtivo:1,CadCartaoCreditoCadContaId:1,CadCartaoCreditoCadGrupoFamiliarId:1,CadCartaoCreditoCadUsuarioId:1,CadCartaoCreditoCodigoTabTipoCartaoCredito:1,CadCartaoCreditoDescricao:1,CadCartaoCreditoDiaFecharFatura:1,CadCartaoCreditoDiaPagarFatura:1,CadCartaoCreditoDiaVencimentoFatura:1,CadCartaoCreditoId:1,CadCartaoCreditoSaldo:1,CadCartaoCreditoTitulo:1,CadCartaoCreditoValorLimiteAtual:1,CadCartaoCreditoValorLimiteTotal:1,CadFaturaCartaoCreditoId:1,DataFechamentoFatura:1,DataPagamentoFatura:1,DiaFecharFatura:1,DiaVencimentoFatura:1,IsParcelarFatura:1,MesFaturaVigente:1,MesVigente:1,NumParcelasFatura:1,Pago:1,SaldoAnterior:1,ValorParcialFaturaAtual:1},CadGrupoFamiliar:{Ativo:1,CadAssinanteAtivo:1,CadAssinanteDataCriacao:1,CadAssinanteId:1,CadAssinanteQdteGrupoFamiliar:1,CadAssinanteUsarioAdminNome:1,CadAssinanteUsuarioAdminEmail:1,CadAssinanteUsuarioAdminId:1,CadGrupoFamiliarId:1,CodigoAcesso:1,DataCriacao:1,QdteUsuarios:1},CadObjetivo:{Ativo:1,CadContaAtivo:1,CadContaCadGrupoFamiliarId:1,CadContaCadUsuarioId:1,CadContaCodigoTabTipoConta:1,CadContaDataInicial:1,CadContaId:1,CadContaSaldoAtual:1,CadContaTitulo:1,CadContaValorInicial:1,CadGrupoFamiliarAtivo:1,CadGrupoFamiliarCadAssinanteId:1,CadGrupoFamiliarCodigoAcesso:1,CadGrupoFamiliarDataCriacao:1,CadGrupoFamiliarId:1,CadGrupoFamiliarQdteUsuarios:1,CadObjetivoId:1,CadUsuarioAtivo:1,CadUsuarioCadGrupoFamiliarId:1,CadUsuarioDataCriacao:1,CadUsuarioEmail:1,CadUsuarioId:1,CadUsuarioNome:1,CadUsuarioTelefone:1,CadUsuarioUserId:1,CodigoTabTipoObjetivo:1,CodigoTabTipoObjetivoDescricao:1,DataFinal:1,DataInicial:1,Descricao:1,Titulo:1,ValorAtual:1,ValorFinal:1,ValorInicial:1},CadParticipante:{Ativo:1,CadGrupoFamiliarAtivo:1,CadGrupoFamiliarCadAssinanteId:1,CadGrupoFamiliarCodigoAcesso:1,CadGrupoFamiliarDataCriacao:1,CadGrupoFamiliarId:1,CadGrupoFamiliarQdteUsuarios:1,CadParticipanteId:1,CpfCnpj:1,NomeRazaoSocial:1},CadReceita:{Ativo:1,CadContaAtivo:1,CadContaCadGrupoFamiliarId:1,CadContaCadUsuarioId:1,CadContaCodigoTabTipoConta:1,CadContaDataInicial:1,CadContaId:1,CadContaSaldoAtual:1,CadContaTitulo:1,CadContaValorInicial:1,CadGrupoFamiliarAtivo:1,CadGrupoFamiliarCadAssinanteId:1,CadGrupoFamiliarCodigoAcesso:1,CadGrupoFamiliarDataCriacao:1,CadGrupoFamiliarId:1,CadGrupoFamiliarQdteUsuarios:1,CadReceitaId:1,CadUsuarioAtivo:1,CadUsuarioCadGrupoFamiliarId:1,CadUsuarioDataCriacao:1,CadUsuarioEmail:1,CadUsuarioId:1,CadUsuarioNome:1,CadUsuarioTelefone:1,CadUsuarioUserId:1,CodigoTabTipoReceita:1,CodigoTabTipoReceitaDescricao:1,DataCriacao:1,DataFixaRecebimento:1,DataRecebimento:1,Descricao:1,Imposto:1,IsFixo:1,Juros:1,Recebido:1,Rendimento:1,Titulo:1,Valor:1},CadUsuario:{Ativo:1,CadGrupoFamiliarAtivo:1,CadGrupoFamiliarCadAssinanteId:1,CadGrupoFamiliarCodigoAcesso:1,CadGrupoFamiliarDataCriacao:1,CadGrupoFamiliarId:1,CadGrupoFamiliarQdteUsuarios:1,CadUsuarioId:1,DataCriacao:1,Email:1,Nome:1,Telefone:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserPasswordHash:1,UserPasswordSalt:1,UserSource:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1,UserUsuarioId:1},TabTipoCartaoCredito:{CodigoTabTipoCartaoCredito:1,Descricao:1,Icone:1},TabTipoConta:{CodigoTabTipoConta:1,Descricao:1},TabTipoDespesa:{CodigoTabTipoDespesa:1,Descricao:1,Icone:1},TabTipoObjetivo:{CodigoTabTipoObjetivo:1,Descricao:1},TabTipoReceita:{CodigoTabTipoReceita:1,Descricao:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

