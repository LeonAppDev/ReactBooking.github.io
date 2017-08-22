using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParcelModel.Exception
{
    public class InvalidParcelException : ArgumentException
    {
        public InvalidParcelException()
        {
        }

        public InvalidParcelException(string message)
            :base(message)
        { }

        public InvalidParcelException(string message, ArgumentException inner)
            :base(message,inner)
        {

        }

    }
}
