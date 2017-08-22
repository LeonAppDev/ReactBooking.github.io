using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParcelModel.Parcel
{
    public abstract class AbstractParcel
    {
        public int Length { get; set; }

        public int Breadth { get; set; }

        public int Height { get; set; }

        public int Weight { get; set; }

    }
}
