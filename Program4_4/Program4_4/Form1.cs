using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Program4_4
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (red1.Checked && red2.Checked)
            {
                this.BackColor = Color.Red;
            }
            else if (blue1.Checked && blue2.Checked)
            {
                this.BackColor = Color.Blue;
            }
            else if (yellow1.Checked && yellow2.Checked)
            {
                this.BackColor = Color.Yellow; 
            }
            else if ((red1.Checked && blue2.Checked) || (blue1.Checked && red2.Checked))
            {
                this.BackColor = Color.Purple;
            }
            else if ((red1.Checked && yellow2.Checked) || (yellow1.Checked && red2.Checked))
            {
                this.BackColor = Color.Orange;
            }
            else if ((blue1.Checked && yellow2.Checked) || (yellow1.Checked && blue2.Checked))
            {
                this.BackColor = Color.Green;
            }
            else
            {
                this.BackColor = Color.LightGray;
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
