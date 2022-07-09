import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import * as util from 'util'

const SECRET = process.env.JWT || 'secret' as string

export interface RequestHeaders { headers: { authorization: string } }

export class Auth {
  static decode (token: string) {
    const verify = util.promisify<string, jwt.Secret, jwt.SignOptions, jwt.SigningKeyCallback>(jwt.verify)
    return verify(token, SECRET, {})
  }

  static salt (password: string) {
    return bcrypt.hash(password, 8)
  }

  static compare (password: string, hash: string) {
    const comparePassword = util.promisify(bcrypt.compare)
    return comparePassword(password, hash)
  }
}
