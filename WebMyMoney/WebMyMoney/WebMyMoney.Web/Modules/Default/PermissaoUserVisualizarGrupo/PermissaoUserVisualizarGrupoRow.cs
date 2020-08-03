
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using WebMyMoney.Administration;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PermissaoUserVisualizarGrupo]")]
    [DisplayName("PermissaoUserVisualizarGrupo"), InstanceName("Permissao User Visualizar Grupo")]
    [ReadPermission(PermissionKeys.Visualizar)]
    [ModifyPermission(PermissionKeys.Editar)]
    [LookupScript(Permission = "*")]
    public sealed class PermissaoUserVisualizarGrupoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cad Usuario Id")]
        public Int32? PermissaoVisualizar
        {
            get { return Fields.PermissaoVisualizar[this]; }
            set { Fields.PermissaoVisualizar[this] = value; }
        }

        [DisplayName("Cad Usuario Id"), NotNull, ForeignKey("[dbo].[CadUsuario]", "CadUsuarioId"), LeftJoin("jCadUsuario"), TextualField("Nome")]
        public Int32? CadUsuarioId
        {
            get { return Fields.CadUsuarioId[this]; }
            set { Fields.CadUsuarioId[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar"), NotNull, ForeignKey("[dbo].[CadGrupoFamiliar]", "CadGrupoFamiliarId"), LeftJoin("jCadGrupoFamiliar"), TextualField("CadGrupoFamiliarTitulo")]
        public Int32? CadGrupoFamiliarId
        {
            get { return Fields.CadGrupoFamiliarId[this]; }
            set { Fields.CadGrupoFamiliarId[this] = value; }
        }

       

        [DisplayName("NomeGrupo"), Size(255), NotNull, QuickSearch]
        public String NomeGrupo
        {
            get { return Fields.NomeGrupo[this]; }
            set { Fields.NomeGrupo[this] = value; }
        }

       
        IIdField IIdRow.IdField
        {
            get { return Fields.PermissaoVisualizar; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NomeGrupo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PermissaoUserVisualizarGrupoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PermissaoVisualizar;
            public Int32Field CadUsuarioId;
            public Int32Field CadGrupoFamiliarId;
            public StringField NomeGrupo;
        }
    }
}
