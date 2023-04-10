import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Footer,
  Header,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  LineRuleType,
  UnderlineType,
  WidthType,
  convertMillimetersToTwip,
  ImageRun,
} from "docx";

import image from "../assets/logo.jpg";

function obtenerFechaDeHoy() {
  const hoy = new Date();
  const dia = hoy.getDate();
  const mes = hoy.getMonth() + 1;
  let mesTexto = "Enero";
  const anio = hoy.getFullYear();
  switch (mes) {
    case 1:
      mesTexto = "Enero";
      break;
    case 2:
      mesTexto = "Febrero";
      break;
    case 3:
      mesTexto = "Marzo";
      break;
    case 4:
      mesTexto = "Abril";
      break;
    case 5:
      mesTexto = "Mayo";
      break;
    case 6:
      mesTexto = "Junio";
      break;
    case 7:
      mesTexto = "Julio";
      break;
    case 8:
      mesTexto = "Agosto";
      break;
    case 9:
      mesTexto = "Septiembre";
      break;
    case 10:
      mesTexto = "Obtubre";
      break;
    case 11:
      mesTexto = "Noviembre";
      break;
    case 12:
      mesTexto = "Diciembre";
      break;
  }
  const fechaAlta = {
    dia: dia,
    mes: mesTexto,
    anio: anio,
  };
  return fechaAlta;
}

function obtenerFechadeBaja(fechaBaja) {
  console.log("esta es la entrada", fechaBaja);
  const baja = new Date(fechaBaja + "T00:00");
  console.log("esta es la fecha de mov", baja);
  const y = baja.getFullYear();
  let m = baja.getMonth() + 1;
  let d = baja.getDate();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  return d + "/" + m + "/" + y;
}

const crearDispoBaja = async (datos) => {
  const fechaHoy = obtenerFechaDeHoy();
  console.log("iniciando...", fechaHoy);

  // imagen
  const blob = await fetch(image).then((r) => r.blob());

  const imagen = new ImageRun({
    data: blob,
    transformation: {
      width: 75, // 100 = 2.65cm
      height: 75,
    },
  });

  // encabeza y pie de pagina

  const encabezado = new Header({
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: `“2023 – 40º Aniversario de la Revolución de la Democracia”`,
            font: "Arial",
            size: 16,
          }),
        ],
        alignment: AlignmentType.RIGHT,
      }),
      new Paragraph({
        children: [imagen],
        indent: {
          left: 600,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Provincia de Tierra del Fuego",
            font: "Arial",
            size: 16,
            italics: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        indent: {
          left: -7200,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Antártida e Islas del Atlántico Sur",
            font: "Arial",
            size: 16,
            italics: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        indent: {
          left: -7200,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Ministerio de Educación, Cultura",
            font: "Arial",
            size: 16,
            italics: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        indent: {
          left: -7200,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Ciencia y Tecnología",
            font: "Arial",
            size: 16,
            italics: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        indent: {
          left: -7200,
        },
      }),
    ],
  });
  const piePagina = new Footer({
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: `“Las Islas Malvinas, Georgias, Sándwich del Sur y espacios marítimos e insulares correspondientes son Argentinos”`,
            font: "Arial",
            size: 16,
          }),
        ],
        alignment: AlignmentType.CENTER,
      }),
    ],
  });

  // parrafos
  const para1 = new Paragraph({
    children: [
      new TextRun({
        text: `Rio Grande, ${fechaHoy.dia} de ${fechaHoy.mes} de ${fechaHoy.anio}`,
        font: "Arial",
        size: 22, // 22 = 11
      }),
    ],
    alignment: AlignmentType.RIGHT,
    spacing: {
      line: 360,
    },
  });
  const para2 = new Paragraph({
    children: [
      new TextRun({
        text: "VISTO",
        font: "Arial",
        size: 22,
        bold: true,
      }),
      new TextRun({
        text: ` la Circular Nº 19/18 producida por la Subsecretaría de Control y Gestión de RRHH–M.ED, Disposición SS.C.Y G RRHH .Nº 0018/18 Disposición SS.C.Y G RRHH .Nº 003/18  y  la Planilla de Movimientos Laborales N° ${datos.dispoPlanilla}/2023 de la Escuela Provincial N° 44, cuya copia se adjunta, y;`,
        font: "Arial",
        size: 22,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      //before: 100, //200=10
      line: 360, //360 = 1.5 multiple
      //lineRule: LineRuleType.AUTO,
      //lineRule: docx.LineRuleType.EXACTLY,
    },
    indent: {
      firstLine: 720,
    },
  });
  const para3 = new Paragraph({
    children: [
      new TextRun({
        text: "CONSIDERANDO",
        font: "Arial",
        size: 22,
        bold: true,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
    indent: {
      firstLine: 720,
    },
  });
  const para4 = new Paragraph({
    children: [
      new TextRun({
        text: `Que en el ofrecimiento a los postulantes se realizó en Acto Público, en dependencias del lugar en donde se constituye la supervisión escolar.`,
        font: "Arial",
        size: 22,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
    indent: {
      firstLine: 720,
    },
  });
  const para5 = new Paragraph({
    children: [
      new TextRun({
        text: `Que de acuerdo a la Disposición E.P. Nº ${datos.dispoNumero}/23, resulta necesario informar el correspondiente Movimiento de Baja de la docente a la Dirección de Recursos Humanos.`,
        font: "Arial",
        size: 22,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
    indent: {
      firstLine: 720,
    },
  });
  const para6 = new Paragraph({
    children: [
      new TextRun({
        text: "Que la suscripta se encuentra facultada para emitir el presente acto administrativo, conforme lo establecido en el Decreto 226/00.",
        font: "Arial",
        size: 22,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
    indent: {
      firstLine: 720,
    },
  });
  const para7 = new Paragraph({
    children: [
      new TextRun({
        text: "POR ELLO:",
        font: "Arial",
        size: 22,
        bold: true,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
    indent: {
      firstLine: 720,
    },
  });
  const para8 = new Paragraph({
    children: [
      new TextRun({
        text: `LA DIRECTORA DE LA ${datos.dispoInstitucion}, DE LA CIUDAD DE RÍO GRANDE.`,
        font: "Arial",
        size: 22,
        bold: true,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
  });
  const para9 = new Paragraph({
    children: [
      new TextRun({
        text: "DISPONE:",
        font: "Arial",
        size: 22,
        bold: true,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
    indent: {
      firstLine: 720,
    },
  });
  const para10 = new Paragraph({
    children: [
      new TextRun({
        text: "ARTÍCULO 1°.- DAR LA BAJA",
        font: "Arial",
        size: 22,
        bold: true,
      }),
      new TextRun({
        text: `, a partir del ${obtenerFechadeBaja(
          datos.dispoBaja
        )}, a el/la docente ${datos.docNombre}DNI Nº ${
          datos.docDNI
        }, Legajo Administrativo Nº ${
          datos.docLegAdmi
        } Legajo en Junta de Clasificación N° ${
          datos.docLegJunta
        }. En el cargo de Maestro de ${datos.dispoCargo}, Categoría ${
          datos.dispoCategoria
        } Turno ${datos.dispoTurno} Situación de Revista: ${
          datos.dispoRevista
        }, ello  en virtud de los motivos expuestos en los considerandos.`,
        font: "Arial",
        size: 22,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
  });
  const para11 = new Paragraph({
    children: [
      new TextRun({
        text: "ARTÍCULO 2°.- NOTIFICAR",
        font: "Arial",
        size: 22,
        bold: true,
      }),
      new TextRun({
        text: " al interesado con copia autenticada de la presente.",
        font: "Arial",
        size: 22,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
  });
  const para12 = new Paragraph({
    children: [
      new TextRun({
        text: "ARTÍCULO 3°.- REMITIR",
        font: "Arial",
        size: 22,
        bold: true,
      }),
      new TextRun({
        text: ` la presente junto a la Planilla de Movimientos N° ${datos.dispoPlanilla} /2023 a la Dirección General  de Recursos Humanos Río Grande, y a quienes corresponda.`,
        font: "Arial",
        size: 22,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      line: 360,
    },
  });
  const para13 = new Paragraph({
    children: [
      new TextRun({
        text: "ARTÍCULO 4°.- ARCHIVAR.",
        font: "Arial",
        size: 22,
        bold: true,
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      after: 300,
      line: 360,
    },
  });
  const para14 = new Paragraph({
    children: [
      new TextRun({
        text: `DISPOSICION Nº ${datos.dispoNumero}/${fechaHoy.anio} ${datos.dispoInstitucion}`,
        font: "Arial",
        size: 22,
        bold: true,
        underline: {
          type: UnderlineType.SIMGLE,
        },
      }),
    ],
    alignment: AlignmentType.JUSTIFIED,
    spacing: {
      before: 300,
      line: 360,
    },
  });

  //tabla
  const tabla = new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "NOTIFICACION",
                    font: "Arial",
                    size: 22,
                    bold: true,
                  }),
                ],
                spacing: {
                  line: 360,
                },
                indent: {
                  firstLine: 100,
                },
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "FIRMA:",
                    font: "Arial",
                    size: 22,
                    bold: true,
                  }),
                ],
                spacing: {
                  line: 360,
                },
                indent: {
                  firstLine: 100,
                },
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "ACLARACION:",
                    font: "Arial",
                    size: 22,
                    bold: true,
                  }),
                ],
                spacing: {
                  line: 360,
                },
                indent: {
                  firstLine: 100,
                },
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "LEGAJO Nº:",
                    font: "Arial",
                    size: 22,
                    bold: true,
                  }),
                ],
                spacing: {
                  line: 360,
                },
                indent: {
                  firstLine: 100,
                },
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "FECHA:                    HORA:",
                    font: "Arial",
                    size: 22,
                    bold: true,
                  }),
                ],
                spacing: {
                  line: 360,
                },
                indent: {
                  firstLine: 100,
                },
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "LUGAR:",
                    font: "Arial",
                    size: 22,
                    bold: true,
                  }),
                ],
                spacing: {
                  line: 360,
                },
                indent: {
                  firstLine: 100,
                },
              }),
            ],
          }),
        ],
      }),
    ],
    width: {
      size: 5000, // 1000 = 1.76cm aprox
      type: WidthType.DXA,
    },
  });

  // crear DOC

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              width: convertMillimetersToTwip(216),
              height: convertMillimetersToTwip(356),
            },
          },
        },
        headers: {
          default: encabezado,
        },
        footers: {
          default: piePagina,
        },
        children: [
          para1,
          para2,
          para3,
          para4,
          para5,
          para6,
          para7,
          para8,
          para9,
          para10,
          para11,
          para12,
          para13,
          tabla,
          para14,
        ],
      },
    ],
  });
  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    const docName = "DispoBaja " + datos.docNombre;
    saveAs(blob, docName);
    console.log("Document created successfully");
  });
};

export default crearDispoBaja;
