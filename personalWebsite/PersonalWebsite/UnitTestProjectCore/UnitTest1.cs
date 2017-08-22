using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ParcelModel;
using ParcelModel.Parcel;

namespace UnitTestProjectCore
{
    [TestClass]
    public class UnitTest1
    {
        private IParcelService _parcelService;

        [TestInitialize]
        public void Init()
        {
            _parcelService = new ParcelService();

        }

        [TestMethod]
        public void MoreThan25Kg_WontFindParcel()
        {
            var input = new InputParcel()
            {
                Length = 1,
                Breadth = 1,
                Height = 1,
                Weight = 26
            };

            var packageType = _parcelService.Identify(input);

            Assert.IsNull(packageType);

        }


        [TestMethod]
        public void LessThan25kgAndCorrectValues_WillFindPackage()
        {
            var input = new InputParcel()
            {
                Length = 1,
                Breadth = 1,
                Height = 1,
                Weight = 1
            };

            var packageType = _parcelService.Identify(input);

            Assert.IsNotNull(packageType);
        }

        [TestMethod]
        public void TooBigLength_WontFindPackage()
        {
            var input = new InputParcel()
            {
                Length = 900,
                Breadth = 1,
                Height = 1,
                Weight = 1
            };

            var packageType = _parcelService.Identify(input);

            Assert.IsNull(packageType);
        }

        [TestMethod]
        public void TooBigBreadth_WontFindPackage()
        {
            var input = new InputParcel()
            {
                Length = 1,
                Breadth = 900,
                Height = 1,
                Weight = 1
            };

            var packageType = _parcelService.Identify(input);

            Assert.IsNull(packageType);
        }

        [TestMethod]
        public void TooBigHeight_WontFindPackage()
        {
            var input = new InputParcel()
            {
                Length = 1,
                Breadth = 1,
                Height = 900,
                Weight = 1
            };

            var packageType = _parcelService.Identify(input);

            Assert.IsNull(packageType);
        }


    }
}
