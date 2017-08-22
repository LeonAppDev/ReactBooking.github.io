using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParcelModel.Parcel
{
    public class ParcelEntity:AbstractParcel
    {
        public ParcelType Type { get; protected set; }
        public decimal Cost { get; set; }
    }
}
