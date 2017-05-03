import nodeBits from 'node-bits';
import nodeBitsExpress, {cors, bodyParser} from 'node-bits-express';
import nodeBitsCode from 'node-bits-code';

nodeBits([
  nodeBitsExpress({
    port: process.env.port || 4002,
    configurations: [
      cors(),
      bodyParser({}),
    ],
  }),
  nodeBitsCode({
    path: __dirname,
  }),
]);
