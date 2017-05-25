import PDFDocument from './pdfkit';
import blobStream  from 'blob-stream';
import logo from '../../static/img/logo_pdf.png';

const makePDF = function (offerDetail, company = 'E-PORTS') {
    let xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", logo, true);
    xmlReq.responseType = "arraybuffer";
    xmlReq.onload = function (oEvent) {
        const {common, detail} = offerDetail;
        let items = detail.items || [];
        const TABLE_HEIGHT = 30;
        let currentHeight = 50;
        let totalPrice = offerDetail.detail.total.USD || 0;

        let doc = new PDFDocument;

        doc.image(xmlReq.response, 430, currentHeight, {width: 120});

        doc.fontSize(12);

        currentHeight += 50;
        doc.text('E-PORTS Reference Price:', 50, currentHeight);
        doc.fill('#f5a623');
        doc.text(`USD ${totalPrice}`, 200, currentHeight);

        doc.fill('#000000');
        doc.text(`From: ${company}`, 460, currentHeight, {width: 120});

        doc.fontSize(10);

        currentHeight += 30;
        doc.rect(50, 130, 500, TABLE_HEIGHT).stroke();
        currentHeight += 10;
        doc.text('Vessel', 58, currentHeight, {width: 100, align: 'center'});
        doc.text('ETA/Sea Trail Date', 158, currentHeight, {width: 120, align: 'center'});
        doc.text('Port', 260, currentHeight, {width: 100, align: 'center'});
        doc.text('Service Type', 358, currentHeight, {width: 120, align: 'center'});
        doc.text('Rate', 470, currentHeight, {width: 70, align: 'center'});

        currentHeight += 20;
        doc.rect(50, currentHeight, 500, 40).stroke();
        currentHeight += 10;
        doc.text(common.vessel, 58, currentHeight, {width: 100, align: 'center'});
        doc.text(common.date, 158, currentHeight, {width: 120, align: 'center'});
        doc.text(common.port, 260, currentHeight, {width: 100, align: 'center'});
        doc.text(common.serviceType, 358, currentHeight, {width: 120, align: 'center'});
        doc.text(common.rate, 470, currentHeight, {width: 70, align: 'center'});

        currentHeight += 50;
        doc.rect(50, currentHeight, 500, 30).stroke();
        currentHeight += 10;
        doc.text('V/No. Cost Item', 58, currentHeight, {width: 100, align: 'left'});
        doc.text('Remarks', 200, currentHeight, {width: 120});
        doc.text('Amount (RMB)', 380, currentHeight, {width: 80, align: 'right'});
        doc.text('= (USD)', 450, 230, {width: 70, align: 'right'});

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            currentHeight += 20;
            doc.rect(50, currentHeight, 500, 30).stroke();
            currentHeight += 10;
            doc.text(item.title, 58, currentHeight, {width: 100, align: 'left'});
            doc.text('', 200, currentHeight, {width: 200});
            doc.text(item.RMB, 380, currentHeight, {width: 80, align: 'right'});
            doc.text(item.USD, 450, currentHeight, {width: 70, align: 'right'});


            const subItems = item.subDetail;
            for (let j = 0; j < subItems.length; j++) {
                const subItem = subItems[j];
                currentHeight += 20;
                doc.rect(50, currentHeight, 500, 50).stroke();
                currentHeight += 10;
                doc.text(subItem.title, 68, currentHeight, {width: 100, align: 'left'});
                doc.text(subItem.remakes, 200, currentHeight, {width: 200});
                doc.text(subItem.RMB, 380, currentHeight, {width: 80, align: 'right'});
                doc.text(subItem.USD, 450, currentHeight, {width: 70, align: 'right'});
                currentHeight += 20;
            }
        }

        // doc.fill('#f5a623');
        doc.fontSize(12);
        currentHeight += 20;
        doc.rect(50, currentHeight, 500, 30).stroke();
        currentHeight += 10;
        doc.text('Total', 68, currentHeight, {width: 100, align: 'left'});
        doc.text('', 200, currentHeight, {width: 200});
        doc.text(detail.total.RMB, 380, currentHeight, {width: 80, align: 'right'});
        doc.text(detail.total.USD, 450, currentHeight, {width: 70, align: 'right'});

        let stream = doc.pipe(blobStream());

        stream.on('finish', function () {
            let url = this.toBlobURL('application/pdf');
            window.open(url);
        });

        doc.end();

    };
    xmlReq.send(null);

};

module.exports = makePDF;
