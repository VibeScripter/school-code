using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Program4_2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            double weight, mass;
            if (double.TryParse(textBox1.Text, out mass))
            {
                weight = mass * 9.8;
                if (weight > 1000)
                {
                    MessageBox.Show("It is too heavy.");
                }
                else if (weight < 10)
                {
                    MessageBox.Show("It is too light.");
                }
                else
                {
                    MessageBox.Show("The weight is " + weight + ".");
                }
            }
        }
    }
}
