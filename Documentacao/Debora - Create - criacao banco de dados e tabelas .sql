--CREATE DATABASE GestaoFinanceira

use GestaoFinanceira


--CREATE TABLE Exceptions(
--	[Id] [bigint] IDENTITY(1,1) NOT NULL,
--	[GUID] [uniqueidentifier] NOT NULL,
--	[ApplicationName] [nvarchar](50) NOT NULL,
--	[MachineName] [nvarchar](50) NOT NULL,
--	[CreationDate] [datetime] NOT NULL,
--	[Type] [nvarchar](100) NOT NULL,
--	[IsProtected] [bit] NOT NULL CONSTRAINT [DF_Exceptions_IsProtected]  DEFAULT ((1)),
--	[Host] [nvarchar](100) NULL,
--	[Url] [nvarchar](500) NULL,
--	[HTTPMethod] [nvarchar](10) NULL,
--	[IPAddress] [nvarchar](40) NULL,
--	[Source] [nvarchar](100) NULL,
--	[Message] [nvarchar](1000) NULL,
--	[Detail] [nvarchar](max) NULL,
--	[StatusCode] [int] NULL,
--	[SQL] [nvarchar](max) NULL,
--	[DeletionDate] [datetime] NULL,
--	[FullJson] [nvarchar](max) NULL,
--	[ErrorHash] [int] NULL,
--	[DuplicateCount] [int] NOT NULL CONSTRAINT [DF_Exceptions_DuplicateCount]  DEFAULT ((1)),
-- CONSTRAINT [PK_Exceptions] PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]


--CREATE TABLE Languages(
--	[Id] [int] IDENTITY(1,1) NOT NULL,
--	[LanguageId] [nvarchar](10) NOT NULL,
--	[LanguageName] [nvarchar](50) NOT NULL,
-- CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
--(
--	[Id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]

Insert into Languages (LanguageId,LanguageName)
values 
('en',	'English'),
('ru',	'Russian'),
('es',	'Spanish'),
('tr',	'Turkish'),
('de',	'German'),
('zh-CN',	'Chinese (Simplified)'),
('it',	'Italian'),
('pt',	'Portuguese'),
('pt-BR',	'Portuguese (Brazil)'),
('fa',	'Farsi'),
('vi-VN',	'Vietnamese (Vietnam)')

--CREATE TABLE Roles(
--	[RoleId] [int] IDENTITY(1,1) NOT NULL,
--	[RoleName] [nvarchar](100) NOT NULL,
-- CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
--(
--	[RoleId] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]

Insert into Roles (RoleName)
values ('Administrador sistema')

--CREATE TABLE RolePermissions(
--	[RolePermissionId] [bigint] IDENTITY(1,1) NOT NULL,
--	[RoleId] [int] NOT NULL,
--	[PermissionKey] [nvarchar](100) NOT NULL,
-- CONSTRAINT [PK_RolePermissions] PRIMARY KEY CLUSTERED 
--(
--	[RolePermissionId] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]

Insert into RolePermissions (RoleId,PermissionKey)
values (1,	'Administration:AllUsuarios'),
(1,	'Administration:AuditLog'),
(1,	'Administration:General'),
(1,	'Administration:Security'),
(1,	'Administration:Translation')

--CREATE TABLE Users(
--	[UserId] [int]  NOT NULL,
--	[Username] [nvarchar](100) NOT NULL,
--	[DisplayName] [nvarchar](100) NOT NULL,
--	[Email] [nvarchar](100) NULL,
--	[Source] [nvarchar](4) NOT NULL,
--	[PasswordHash] [nvarchar](86) NOT NULL,
--	[PasswordSalt] [nvarchar](10) NOT NULL,
--	[LastDirectoryUpdate] [datetime] NULL,
--	[UserImage] [nvarchar](100) NULL,
--	[InsertDate] [datetime] NOT NULL,
--	[InsertUserId] [int] NULL,
--	[UpdateDate] [datetime] NULL,
--	[UpdateUserId] [int] NULL,
--	[IsActive] [smallint] NOT NULL CONSTRAINT [DF_Users_IsActive]  DEFAULT ((1)),
--	UsuarioId int 
-- CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
--(
--	[UserId] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]

INSERT INTO Users (UserId,Username,DisplayName,Email,[Source],PasswordHash,PasswordSalt,InsertDate,InsertUserId,UpdateDate,UpdateUserId,UsuarioId)
VALUES (1,'Admin',
		'Administrador',
		'deborapesantos@gmail.com',
		'site',
		'rfqpSPYs0ekFlPyvIRTXsdhE/qrTHFF+kKsAUla7pFkXL4BgLGlTe89GDX5DBysenMDj8AqbIZPybqvusyCjwQ',
		'hJf_F',
		'2020-02-27 00:00:00.000',
		1,
		1,
		1,
		1);

--CREATE TABLE UserPermissions(
--	[UserPermissionId] [bigint] IDENTITY(1,1) NOT NULL,
--	[UserId] [int] NOT NULL,
--	[PermissionKey] [nvarchar](100) NOT NULL,
--	[Granted] [bit] NOT NULL,
-- CONSTRAINT [PK_UserPermissions] PRIMARY KEY CLUSTERED 
--(
--	[UserPermissionId] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]



--CREATE TABLE UserPreferences(
--	[UserPreferenceId] [int] IDENTITY(1,1) NOT NULL,
--	[UserId] [bigint] NOT NULL,
--	[PreferenceType] [nvarchar](100) NOT NULL,
--	[Name] [nvarchar](200) NOT NULL,
--	[Value] [nvarchar](max) NULL,
-- CONSTRAINT [PK_UserPreferences] PRIMARY KEY CLUSTERED 
--(
--	[UserPreferenceId] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]



--CREATE TABLE UserRoles(
--	[UserRoleId] [bigint] IDENTITY(1,1) NOT NULL,
--	[UserId] [int] NOT NULL,
--	[RoleId] [int] NOT NULL,
-- CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
--(
--	[UserRoleId] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]
--Insert into UserRoles (UserId,RoleId)
--values (1,1)


--CREATE TABLE TabTipoObjetivo (
--  CodigoTabTipoObjetivo INTEGER NOT NULL  IDENTITY(1,1) PRIMARY KEY,
--  Descricao VARCHAR(255) NULL
--);

INSERT INTO TabTipoObjetivo (Descricao)
VALUES ('Casa'),
       ('Carro'),
       ('Estudos'),
	   ('Pagamento de dívida'),
	   ('Viagem');
	  


--CREATE TABLE TabTipoDespesa (
--  CodigoTabTipoDespesa INTEGER NOT NULL  IDENTITY(1,1) PRIMARY KEY,
--  Descricao VARCHAR(255) NULL,
--  Icone VARCHAR(255) NULL
--);

INSERT INTO TabTipoDespesa (Descricao)
VALUES ('Alimentação'),
       ('Educação'),
       ('Lazer'),
	   ('Moradia'),
	   ('Pagamentos'),
	   ('Vestuário'),
	   ('Saúde'),
	   ('Transporte'),
	   ('Outros');


--CREATE TABLE TabTipoConta (
--  CodigoTabTipoConta INTEGER NOT NULL  IDENTITY(1,1) PRIMARY KEY,
--  Descricao VARCHAR(255) NULL
--);

INSERT INTO TabTipoConta (Descricao)
VALUES ('Conta Corrente'),
       ('Dinheiro'),
       ('Poupança'),
	   ('Investimentos'),
	   ('Outros');

--CREATE TABLE TabTipoReceita (
--  CodigoTabTipoReceita INTEGER NOT NULL  IDENTITY(1,1) PRIMARY KEY,
--  Descricao VARCHAR(255) NULL
--);

INSERT INTO TabTipoReceita (Descricao)
VALUES ('Estorno'),
       ('Investimento'),
       ('Presente'),
       ('Prêmio'),
	   ('Salário'),
	   ('Outros');

--CREATE TABLE TabTipoCartaoCredito (
--  CodigoTabTipoCartaoCredito INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  Descricao VARCHAR(255) NULL,
--  Icone VARCHAR(255) NULL,
--);


INSERT INTO TabTipoCartaoCredito (Descricao,Icone)
VALUES ('Elo',''),
       ('Visa',''),
       ('Master Card',''),
       ('Hipercard',''),
	   ('American Express',''),
	   ('Sorocred',''),
	   ('Cartão BNDES',''),
	   ('Diners Club',''),
	   ('Outro cartão','');

--CREATE TABLE CadAssinante (
--  CadAssinanteId INTEGER NOT NULL  IDENTITY(1,1) PRIMARY KEY,
--  DataCriacao DATETIME NULL,
--  UsuarioAdminId INTEGER NULL,
--  UsarioAdminNome VARCHAR(255) NULL,
--  UsuarioAdminEmail VARCHAR(255) NULL,
--  QdteGrupoFamiliar INTEGER  NULL,
--  Ativo BIT NULL,
--);

INSERT INTO CadAssinante (DataCriacao,UsuarioAdminId,UsarioAdminNome,UsuarioAdminEmail,QdteGrupoFamiliar,Ativo)
VALUES ('2020-02-27 00:00:00.000',1,'Administrador','deborapesantos@gmail.com',5,1);



CREATE TABLE CadGrupoFamiliar (
  CadGrupoFamiliarId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
  CadAssinanteId INTEGER NOT NULL,
  Ativo BIT NULL,
  DataCriacao DATETIME NULL,
  CodigoAcesso VARCHAR(255) NULL,
  QdteUsuarios INTEGER  NULL,
  Titulo varchar(255) null,
  IsGrupoPessoal bit null
  INDEX CadAssinanteId(CadAssinanteId),
  FOREIGN KEY(CadAssinanteId)
    REFERENCES CadAssinante(CadAssinanteId)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

INSERT INTO CadGrupoFamiliar (CadAssinanteId,Ativo,DataCriacao,CodigoAcesso,QdteUsuarios,Titulo)
VALUES (1,1,'2020-02-27 00:00:00.000','E4B65B',5,'grupoAdmin');

--CREATE TABLE CadUsuario (
--  CadUsuarioId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  CadGrupoFamiliarId INTEGER NOT NULL,
--  UserId INTEGER NOT NULL,
--  Nome VARCHAR(255) NOT NULL,
--  Telefone VARCHAR(13) NOT NULL,
--  DataCriacao  DATETIME NOT NULL,
--  Email VARCHAR(255) NOT NULL,
--  Ativo BIT NULL,
--  GrupoPessoalId INTEGER null
--  INDEX CadGrupoFamiliarId(CadGrupoFamiliarId),
--  INDEX UserId(UserId),
--  FOREIGN KEY(CadGrupoFamiliarId)
--    REFERENCES CadGrupoFamiliar(CadGrupoFamiliarId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(UserId)
--    REFERENCES Users(UserId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION
--);

INSERT INTO CadUsuario (CadGrupoFamiliarId,UserId,Nome,Telefone,DataCriacao,Email,Ativo)
VALUES (1,1,'Admin','981083277','2020-02-27 00:00:00.000','deborapesantos@gmail.com',1);


--CREATE TABLE CadConta (
--  CadContaId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  CadGrupoFamiliarId INTEGER NOT NULL,
--  CadUsuarioId INTEGER NOT NULL,
--  CodigoTabTipoConta INTEGER NOT NULL,
--  ValorInicial DECIMAL NULL,
--  SaldoAtual DECIMAL NULL,
--  Titulo VARCHAR(255) NOT NULL,
--  DataInicial DATETIME NOT NULL,
--  Ativo BIT NULL,
--  SomarSaldo bit null,
--  INDEX CodigoTabTipoConta(CodigoTabTipoConta),
--  INDEX CadUsuarioId(CadUsuarioId),
--  INDEX CadGrupoFamiliarId(CadGrupoFamiliarId),
--  FOREIGN KEY(CodigoTabTipoConta)
--    REFERENCES TabTipoConta(CodigoTabTipoConta)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadUsuarioId)
--    REFERENCES CadUsuario(CadUsuarioId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadGrupoFamiliarId)
--    REFERENCES CadGrupoFamiliar(CadGrupoFamiliarId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION
--);

--CREATE TABLE CadParticipante (
--  CadParticipanteId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  CadGrupoFamiliarId INTEGER NOT NULL,
--  NomeRazaoSocial VARCHAR(255) NOT NULL,
--  CpfCnpj VARCHAR(15),
--  Ativo BIT NULL,
 
--  INDEX CadGrupoFamiliarId(CadGrupoFamiliarId),
--  FOREIGN KEY(CadGrupoFamiliarId)
--    REFERENCES CadGrupoFamiliar(CadGrupoFamiliarId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION
--);


--CREATE TABLE CadCartaoCredito (
--  CadCartaoCreditoId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  CadContaId INTEGER NOT NULL,
--  CadGrupoFamiliarId INTEGER NOT NULL,
--  CadUsuarioId INTEGER NOT NULL,
--  CodigoTabTipoCartaoCredito INTEGER NOT NULL,
--  Titulo VARCHAR(255) NOT NULL,
--  Descricao VARCHAR(255) NULL,
--  DiaVencimentoFatura DATETIME NOT NULL,
--  DiaPagarFatura INTEGER NOT NULL,
--  DiaFecharFatura INTEGER NOT NULL,
--  ValorLimiteTotal DECIMAL NOT NULL,
--  ValorLimiteAtual DECIMAL NOT NULL,
--  Saldo DECIMAL NULL,
--  Ativo BIT NULL,
--  INDEX CodigoTabTipoCartaoCredito(CodigoTabTipoCartaoCredito),
--  INDEX CadUsuarioId(CadUsuarioId),
--  INDEX CadGrupoFamiliarId(CadGrupoFamiliarId),
--  INDEX CadContaId(CadContaId),
--  FOREIGN KEY(CodigoTabTipoCartaoCredito)
--    REFERENCES TabTipoCartaoCredito(CodigoTabTipoCartaoCredito)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadUsuarioId)
--    REFERENCES CadUsuario(CadUsuarioId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadGrupoFamiliarId)
--    REFERENCES CadGrupoFamiliar(CadGrupoFamiliarId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadContaId)
--    REFERENCES CadConta(CadContaId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION
--);

--CREATE TABLE CadFaturaCartaoCredito (
--  CadFaturaCartaoCreditoId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  CadCartaoCreditoId INTEGER NOT NULL,
--  MesFaturaVigente integer not null,
--  DiaVencimentoFatura DATETIME NULL,
--  DataPagamentoFatura DATETIME NULL,
--  DataFechamentoFatura DATETIME NULL,
--  DiaFecharFatura INTEGER NULL,
--  ValorParcialFaturaAtual DECIMAL NULL,
--  IsParcelarFatura bit null,
--  NumParcelasFatura integer null,
--  SaldoAnterior DECIMAL NULL,
--  Ativo BIT NULL,
--  Pago Bit null,
--  INDEX CadCartaoCreditoId(CadCartaoCreditoId),
--  FOREIGN KEY(CadCartaoCreditoId)
--    REFERENCES CadCartaoCredito(CadCartaoCreditoId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--);

--CREATE TABLE CadDespesa (
--  CadDespesaId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  CadContaId INTEGER NOT NULL,
--  CadGrupoFamiliarId INTEGER NOT NULL,
--  CadUsuarioId INTEGER NOT NULL,
--  CadFaturaCartaoCreditoId INTEGER,
--  CodigoTabTipoDespesa INTEGER NOT NULL,
--  CadParticipanteId Integer,
--  Titulo VARCHAR(255) NOT NULL,
--  DataPagamento DATETIME NULL,
--  DataCriacao DATETIME NOT NULL,
--  isFixo BIT NULL,
--  isParcelado BIT null,
--  numParcela integer,
--  DataVencimento DATETIME NOT NULL,
--  ValorTotal DECIMAL NOT NULL,
--  MultasJuros DECIMAL NULL,
--  DataFixaVencimento INTEGER NULL,
--  Pago BIT NOT NULL,
--  Ativo BIT NULL,
--  Imposto DECIMAL,
--  Descontos DECIMAL NULL,
--  INDEX CodigoTabTipoDespesa(CodigoTabTipoDespesa),
--  INDEX CadUsuarioId(CadUsuarioId),
--  INDEX CadGrupoUsuarioId(CadGrupoFamiliarId),
--  INDEX CadContaId(CadContaId),
--  FOREIGN KEY(CodigoTabTipoDespesa)
--    REFERENCES TabTipoDespesa(CodigoTabTipoDespesa)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadUsuarioId)
--    REFERENCES CadUsuario(CadUsuarioId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadGrupoFamiliarId)
--    REFERENCES CadGrupoFamiliar(CadGrupoFamiliarId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadContaId)
--    REFERENCES CadConta(CadContaId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadFaturaCartaoCreditoId)
--    REFERENCES CadFaturaCartaoCredito(CadFaturaCartaoCreditoId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadParticipanteId)
--    REFERENCES CadParticipante(CadParticipanteId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION
--);

--CREATE TABLE CadReceita (
--  CadReceitaId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  CadGrupoFamiliarId INTEGER NOT NULL,
--  CadContaId INTEGER NOT NULL,
--  CadUsuarioId INTEGER NOT NULL,
--  CodigoTabTipoReceita INTEGER NOT NULL,
--  CadParticipanteId Integer,
--  Titulo VARCHAR(255) NOT NULL,
--  Descricao VARCHAR(255) NULL,
--  Participante VARCHAR(255) NULL,
--  DataRecebimento DATETIME NULL,
--  DataCriacao DATETIME NOT NULL,
--  isFixo BIT NOT NULL,
--  DataFixaRecebimento INTEGER NULL,
--  Valor DECIMAL NOT NULL,
--  Recebido BIT NOT NULL,
--  Juros DECIMAL,
--  Rendimento DECIMAL,
--  Imposto DECIMAL,
--  Ativo BIT NULL,
--  SomarSaldo bit null,
--  INDEX CodigoTabTipoReceita(CodigoTabTipoReceita),
--  INDEX CadUsuarioId(CadUsuarioId),
--  INDEX CadContaId(CadContaId),
--  INDEX CadGrupoFamiliarId(CadGrupoFamiliarId),
--  FOREIGN KEY(CodigoTabTipoReceita)
--    REFERENCES TabTipoReceita(CodigoTabTipoReceita)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadUsuarioId)
--    REFERENCES CadUsuario(CadUsuarioId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadContaId)
--    REFERENCES CadConta(CadContaId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadGrupoFamiliarId)
--    REFERENCES CadGrupoFamiliar(CadGrupoFamiliarId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadParticipanteId)
--    REFERENCES CadParticipante(CadParticipanteId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION
--);

--CREATE TABLE CadObjetivo (
--  CadObjetivoId INTEGER NOT NULL IDENTITY(1,1) PRIMARY KEY,
--  CadContaId INTEGER NOT NULL,
--  CadGrupoFamiliarId INTEGER NOT NULL,
--  CadUsuarioId INTEGER NOT NULL,
--  CodigoTabTipoObjetivo INTEGER NOT NULL,
--  Titulo VARCHAR(255) NOT NULL,
--  Descricao VARCHAR(255) NULL,
--  ValorFinal  DECIMAL NOT NULL,
--  ValorInicial DECIMAL NULL,
--  ValorAtual DECIMAL NULL,
--  DataFinal DATETIME NOT NULL,
--  DataInicial DATETIME NOT NULL,
--  Ativo BIT NULL,
--  INDEX CodigoTabTipoObjetivo(CodigoTabTipoObjetivo),
--  INDEX CadUsuarioId(CadUsuarioId),
--  INDEX CadGrupoFamiliarId(CadGrupoFamiliarId),
--  INDEX CadContaId(CadContaId),
--  FOREIGN KEY(CodigoTabTipoObjetivo)
--    REFERENCES TabTipoObjetivo(CodigoTabTipoObjetivo)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadUsuarioId)
--    REFERENCES CadUsuario(CadUsuarioId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadGrupoFamiliarId)
--    REFERENCES CadGrupoFamiliar(CadGrupoFamiliarId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION,
--  FOREIGN KEY(CadContaId)
--    REFERENCES CadConta(CadContaId)
--      ON DELETE NO ACTION
--      ON UPDATE NO ACTION
--);

--CREATE TABLE PermissaoUserVisualizarGrupo (
--    PermissaoVisualizar INT PRIMARY KEY IDENTITY (1, 1),
--    CadUsuarioId int NOT NULL,
--    CadGrupoFamiliarId int not null,
--	NomeGrupo varchar(255),
--    FOREIGN KEY (CadUsuarioId) REFERENCES CadUsuario (CadUsuarioId),
--	FOREIGN KEY (CadGrupoFamiliarId) REFERENCES CadGrupoFamiliar (CadGrupoFamiliarId)
--);




Insert into Roles (RoleName)
values ('Usuário')


Insert into RolePermissions (RoleId,PermissionKey)
values (2,	'Usuario:padrao'),
(2,	'Usuario:General'),
(2,	'Usuario:Editar'),
(2,	'Usuario:Visualizar'),
(2,	'Usuario: Visualizar'),
(2,	'Administration:General'),
(2,	'Administration:Translation'),
(2,	'Administration:Security')

insert into UserRoles (UserId,	RoleId)
values (1,	1)


SELECT TOP 1000 [UserRoleId]
      ,[UserId]
      ,[RoleId]
  FROM [GestaoFinanceira].[dbo].[UserRoles]
  
--UserRoleId	UserId	RoleId
--1	1	1
--2	2	2
--4	3	2


SELECT TOP 1000 [RoleId]
      ,[RoleName]
  FROM [GestaoFinanceira].[dbo].[Roles]

--RoleId	RoleName
--1	Administrador sistema
--2	Usuário

SELECT TOP 1000 [RolePermissionId]
      ,[RoleId]
      ,[PermissionKey]
  FROM [GestaoFinanceira].[dbo].[RolePermissions]
  
--RolePermissionId	RoleId	PermissionKey
--1	1	1	Administration:AllUsuarios
--2	2	1	Administration:AuditLog
--3	3	1	Administration:General
--4	4	1	Administration:Security
--5	5	1	Administration:Translation
--6	6	2	Usuario:padrao
--7	7	2	Usuario:General
--8	8	2	Usuario:Editar
--9	9	2	Usuario:Visualizar
--10	10	2	Usuario: Visualizar
--11	11	2	Administration:General
--12	12	2	Administration:Translation
--13	13	2	Administration:Security




